const style = { backgroundColor: 'teel', borderBottomColor: 'rgb(145, 145, 145)' };
const defaultStyle = { background: 'rgb(96, 212, 80)', borderBottomColor: 'rgb(96, 212, 80)'}
export default function userReducer(
  state = { allTabs: [{ style: defaultStyle }, { style }, { style }] },
  action
) {
  switch (action.type) {
    case 'TOGGLE_TAB':
      return {
        allTabs: [
          ...state.allTabs.map((item, index) => {
            return index === action.payload.id
              ? { style: action.payload.style }
              : { style: style };
          }),
        ],
      };
    case 'NEWS_TAB':
      return [...state.users, action.payload];
    case 'LAST_MONTH_TAB':
      return [...state.users, action.payload];
    default:
      return state;
  }
}
