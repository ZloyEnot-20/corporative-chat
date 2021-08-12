import userReducer from './userReducer'
import dataReducer from './dataReducer'
import tabsReducer from './tabsReducer'
import ratingReducer from './ratingReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
   users: userReducer,
   data: dataReducer,
   tabRoot: tabsReducer,
   rating: ratingReducer
})

export default allReducers;