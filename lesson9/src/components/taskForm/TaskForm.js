import React, { Component } from 'react';
import { addNewTask } from '../../redux/actions/tasksActions';
import css from './TaskForm.module.css';
import { connect } from 'react-redux';


class TaskForm extends Component {
    state = {
        taskName: '',
        taskValue: ''
    }

    onHandleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onHandleSubmit = (e) => {
        e.preventDefault();
        // this.props.addNewTask({ ...this.state });
        this.props.addNewTask({ ...this.state });
        this.setState({ taskName: '', taskValue: '' })

    }

    render() {
        // console.log(this.props)
        return (
            <form onSubmit={this.onHandleSubmit} className={css.form}>
                <input
                    type="text"
                    name="taskName"
                    value={this.state.taskName}
                    onChange={this.onHandleChange} />
                <input
                    type="text"
                    name="taskValue"
                    value={this.state.taskValue}
                    onChange={this.onHandleChange} />
                <button type="submit" className={css.button}>Add new Task</button>
            </form>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        state: state.navigation
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addNewTask: (task) => {
            dispatch(addNewTask(task))
        }
    }
}
// const mapDispatchToProps = {
//     addNewTask
// }

export default connect(null, mapDispatchToProps)(TaskForm);

