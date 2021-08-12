import React from 'react';
import './infoMenu.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleTab, addLike, removeLike, checkLeader } from '../../actions';
import { GiTrophy } from 'react-icons/gi';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { tabsData } from '../data';
const InfoMenu = () => {
  const tabRoot = useSelector((state) => state.tabRoot.allTabs);
  const ratingInfo = useSelector((state) => state.rating);
  const dispatch = useDispatch();
  const tab = React.useRef(null);
  const tabMenu = React.useRef(null);

  const handleTab = (direction, tabId, color) => {
    console.log(tabRoot[0]);
    tab.current.style.left = direction;
    dispatch(
      toggleTab({
        id: tabId,
        style: {
          background: color,
          borderBottomColor: color,
        },
      })
    );
  };

  const handleLike = (isAddLike, index, likes) => {
    if (!isAddLike) {
      dispatch(
        addLike({
          id: index,
        })
      );
      setTimeout(
        () =>
          dispatch(
            checkLeader({
              likes: likes,
            })
          ),
        700
      );

      return;
    }
    dispatch(
      removeLike({
        id: index,
      })
    );
    setTimeout(
      () =>
        dispatch(
          checkLeader({
            likes: likes,
          })
        ),
      700
    );
  };

  return (
    <div className="info-menu">
      <div className="tabs-menu" ref={tabMenu}>
        {tabsData.map(({ icon, left, background }, index) => (
          <div
            className="tabs"
            style={tabRoot[index].style}
            onClick={() => handleTab(left, index, background)}
          >
            {icon}
          </div>
        ))}
      </div>
      <div className="content">
        <div className="moveable-content" ref={tab}>
          <div className="tab-content">
            <span className="rating">Рейтинг</span>
            {ratingInfo.map(({ user, likes, liked, leader }, index) => (
              <div className="rating-users">
                <div className="rating-user-name">
                  <span className="user-name">{user}</span>
                  {leader && <GiTrophy />}
                </div>
                <div className="like-button-wrap">
                  <div className="number-of-likes">{likes}</div>
                  {liked ? (
                    <AiTwotoneLike
                      className="like-button"
                      size="17px"
                      onClick={() => handleLike(liked, index, likes)}
                    />
                  ) : (
                    <AiOutlineLike
                      className="like-button"
                      size="17px"
                      onClick={() => handleLike(liked, index)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="tab-content">Новости Компании</div>
          <div className="tab-content">Герои месяца</div>
        </div>
        {/* <div className="tab-content"></div>
        <div className="tab-content"></div> */}
      </div>
    </div>
  );
};

export default InfoMenu;
