import React from 'react';
import InfoMenu from '../InfoMenu/infoMenu';
import './Chat.css';
import SideMenu from '../SideMenu/SideMenu';
import InputEmoji from 'react-input-emoji';
import { useDispatch, useSelector } from 'react-redux';
import { addData, editData, deleteData } from '../../actions';
import { IoMdSend, IoMdShareAlt, IoMdCreate } from 'react-icons/io';
import { ImBin } from 'react-icons/im';

const Chat = () => {
  const dispatch = useDispatch();
  const [isReplied, setIsReplied] = React.useState('');
  const [inputMessage, setInputMessage] = React.useState('');
  const [isEditing, setIsEditing] = React.useState(null);
  const sendButton = React.useRef(null);
  const repliedMessage = React.useRef(null);
  const input = React.useRef(null);
  const messagesRef = React.useRef(null);

  const users = useSelector((state) => state.users);
  const data = useSelector((state) => state.data);
  const getTime = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    return `${hours < 10 ? '0' + hours : hours} : ${
      minutes < 10 ? '0' + minutes : minutes
    }`;
  };

  const ID = () => {
    return Math.round(Math.random() * 10000);
  };

  const handleReply = ({ user, text }) => {
    repliedMessage.current.style.visibility = 'visible';
    setIsReplied(`${user}: ${text}`);
    input.current.focus();
    repliedMessage.current.innerHTML = `<p>${user}: ${text}</p>`;
  };

  const handleEdit = (message, index) => {
    console.log(index);
    setIsEditing(index);
    handleReply(message);
    setInputMessage(message.text);
  };

  const deleteMessage = (id) => {
    dispatch(
      deleteData({
        id: id,
      })
    );
  };

  const handleSend = () => {
    if (!isEditing && inputMessage) {
      sendButton.current.style.left = '10px';
      setTimeout(() => {
        sendButton.current.style.left = '0px';
      }, 500);

      dispatch(
        addData({
          text: inputMessage,
          user: users.me.name,
          time: getTime(),
          edited: false,
          mine: true,
          replied: isReplied,
          id: ID(),
        })
      );
      setIsReplied('');
      setInputMessage('');
      repliedMessage.current.style.visibility = 'hidden';
    }
    if (inputMessage) {
      dispatch(
        editData({
          text: inputMessage,
          user: users.me.name,
          time: getTime(),
          edited: true,
          mine: true,
          replied: isReplied,
          index: isEditing,
        })
      );
      setIsReplied('');
      setInputMessage('');
      setIsEditing(null);
      repliedMessage.current.style.visibility = 'hidden';
    }
  };

  React.useEffect(() => {
    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [data]);

  return (
    <div className="body">
      <div className="chat-body">
        <div className="title">Флудилка</div>

        <div className="chat-section">
          <div className="menu">
            <SideMenu setInputMessage={setInputMessage} input={input} />
          </div>
          <div className="main-chat">
            {/* <div className="search">Search</div> */}

            <div className="chat-window" ref={messagesRef}>
              {data.map((message, index) => (
                <div
                  className={`${
                    message.mine ? 'message-mine' : 'message-wrap'
                  }`}
                >
                  <div className="icon-cover">
                    <div className="user-icon">
                      <div className="icon">{message.user[0]}</div>
                    </div>
                  </div>
                  <div className="message-cover">
                    <li
                      className="message"
                      style={
                        message.mine
                          ? {
                              borderBottomRightRadius: '0',
                              background: '#74c578',
                            }
                          : { borderBottomLeftRadius: '0' }
                      }
                    >
                      <p className="top-reply">{message.replied}</p>
                      <div className="text-wrap">
                        <div className="text-wrapper">
                          <p className="text"> {message.text}</p>
                        </div>

                        {!message.mine ? (
                          <IoMdShareAlt
                            size="14px"
                            onClick={() => handleReply(message)}
                            className="reply-message"
                          />
                        ) : (
                          <div className="message-action" key={index}>
                            <ImBin
                              size="10px"
                              className="delete"
                              onClick={() => deleteMessage(message.id)}
                            />
                            <IoMdCreate
                              size="12px"
                              className="edit-button"
                              onClick={() => handleEdit(message, index)}
                            />
                          </div>
                        )}
                      </div>
                      <div
                        className="message-deatils"
                        style={{ textAlign: 'end' }}
                      >
                        <span className="time">{message.time}</span>
                        {message.edited && (
                          <span className="edited">Edited</span>
                        )}
                      </div>
                    </li>
                  </div>
                </div>
              ))}
            </div>
            <div className="message-section">
              <div className="message-input-wrap">
                <div className="replied-message" ref={repliedMessage}></div>
                <div className="message-input">
                  <InputEmoji
                    value={inputMessage}
                    onChange={setInputMessage}
                    ref={input}
                    height={2}
                    onEnter={handleSend}
                    borderRadius={12}
                  />
                </div>
              </div>
              <div className="message-input-button-wrap" ref={sendButton}>
                <IoMdSend
                  size="30px"
                  className="message-input-button"
                  onClick={handleSend}
                />
              </div>
            </div>
          </div>
          <div className="options">
            <InfoMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
