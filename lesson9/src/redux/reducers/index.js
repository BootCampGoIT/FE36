import { combineReducers } from 'redux';

import { tasks } from './tasksReducer';
import { cart } from './cartReducer';

const rootReducer = combineReducers({
    tasks,
    cart
})
export default rootReducer;