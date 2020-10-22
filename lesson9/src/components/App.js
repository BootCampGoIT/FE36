import React, { Component } from 'react';
import List from './list/List';
import TaskForm from './taskForm/TaskForm';
import { addTask, getTasks } from '../api/api';

class App extends Component {
  // state = {
  //   tasks: [],

  // }

  // componentDidMount() {
  //   getTasks().then(tasks => this.setState({ tasks }))
  // }

  // addNewTask = async (task) => {
  //   this.setState({ isLoading: true });
  //   await addTask(task)
  //     .then(id => {
  //       this.setState(prevState => ({ tasks: [...prevState.tasks, { ...task, id }] }))
  //     })
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }))
  // }

  // deleteTask = (e) => {
  //   const id = e.target.id
  //   this.setState(prevState => ({ tasks: [...prevState.tasks.filter(task => task.id !== id)] }))

  // }

  render() {

    return (
      <div style={{ padding: "5px" }}>
        <TaskForm />
        <List />
        {/* {(() => (<h2>Cart</h2>))()} */}
      </div>
    );
  }
}

export default App;

