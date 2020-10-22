import { ADD_TASK } from "../constants/tasksConstants";


const initialState = [];

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload] ;
        default:
            return state;
    }
};

