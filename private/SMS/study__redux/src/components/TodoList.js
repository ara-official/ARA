import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends React.Component {
    propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        onTodoClick: PropTypes.func.isRequired
    }
    render(){
        const {todos, onTodoClick} = this.propTypes;
        return (
            <ul>
                {todos.map( (todo, index) => (<Todo key={index} {...todo} onClick={() => onTodoClick(index)} />) )}
            </ul>
        )
    }
}

export default TodoList;