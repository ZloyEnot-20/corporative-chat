import { ratingData } from '../components/data';

export default function ratingReducer(state = ratingData, action) {
  switch (action.type) {
    case 'ADD_LIKE':
      return [
        ...state.map(({ user, likes, liked, leader }, index) =>
          index === action.payload.id
            ? { user: user, likes: likes + 1, liked: true, leader }
            : { user: user, likes, liked, leader }
        ),
      ];
    case 'REMOVE_LIKE':
      return [
        ...state.map(({ user, likes, liked, leader }, index) =>
          index === action.payload.id
            ? { user: user, likes: likes - 1, liked: false, leader }
            : { user: user, likes, liked, leader }
        ),
      ];
    case 'CHECK_LEADER':
      return [
        ...[
          ...state.sort((a, b) => {
            return b.likes - a.likes;
          }),
        ].map(({ user, likes, liked, leader }, index) =>
          index === 0
            ? { user: user, likes: likes, liked, leader: true }
            : { user: user, likes, liked, leader: false }
        ),
      ];
    default:
      return state;
  }
}
