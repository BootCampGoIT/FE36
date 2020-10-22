import React from 'react';
import ListItem from './listItem/ListItem';
// import css from './List.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import listItemAnimation from './listItemAnimation.module.css';
import { connect } from 'react-redux';


const List = ({ tasks }) => {
   
    return (
        <TransitionGroup component="ul">
            {tasks.map(task =>
                <CSSTransition classNames={listItemAnimation} key={task.id} timeout={300}>
                    <ListItem id={task.id} task={task} />
                    {/* <ListItem id={task.id} task={task} deleteTask={deleteTask} /> */}
                </CSSTransition>
            )}
        </TransitionGroup>

    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch(actionCreator)
//         }
//     }
// }

export default connect(mapStateToProps)(List);