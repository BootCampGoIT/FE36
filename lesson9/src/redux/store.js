import { createStore,   } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';


// const rootReducer = combineReducers({
//     tasks: reducers.tasksReducer,
//     cart: reducers.cartReducer
// })
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducers, composeWithDevTools());

// console.dir(store);
// console.log(store.getState());
// console.log(store.dispatch());
export default store;


// function store1 (){
//     return {
//         state: {
//             tasks:[],
//             notifications: ["gdha", "fsdfds"]
//         },
//         getState(){
//             return this.state
//         },
//         dispatch(action:{type:"dsff", payload: {}}){
//             let state = []
//             switch (type) {
//                 case "dsff":
//                    data=[...this.data.tasks, payload]
//                    break;
            
//                 default:
//                     this.data;
//             }

//             this.data = {...this.data, ["tasks"]: data }

//         }
//     }
// }