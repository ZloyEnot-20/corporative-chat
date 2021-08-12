export const addMessage = (data)=>{
   return {
        type: 'ADD_MESSAGE',
        payload: data
    }
}

export const addData = (data)=>{
    return{
        type: 'ADD_DATA',
        payload: data
    }
}
export const editData = (data)=>{
    return{
        type: 'EDIT_DATA',
        payload: data
    }
}
export const deleteData = (data)=>{
    return{
        type: 'DELETE_DATA',
        payload: data
    }
}

export const addUser =  (data)=>{
    return{
        type: 'ADD_USER',
        payload: data
    }
}
export const addMe =  (data)=>{
    return{
        type: 'ADD_ME',
        payload: data
    }
}

export const toggleTab = (data) => {
  return {
    type: 'TOGGLE_TAB',
    payload: data,
  };
};
export const addLike = (data) => {
  return {
    type: 'ADD_LIKE',
    payload: data,
  };
};
export const removeLike = (data) => {
  return {
    type: 'REMOVE_LIKE',
    payload: data,
  };
};
export const checkLeader = (data) => {
  return {
    type: 'CHECK_LEADER',
    payload: data,
  };
};

