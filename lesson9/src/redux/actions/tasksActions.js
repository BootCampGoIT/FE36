import { ADD_TASK } from "../constants/tasksConstants"

const addNewTask = (task) => { 
    return {
        type: ADD_TASK,
        payload: task //{taskName: '',taskValue: ''}
    }
}

export { addNewTask }