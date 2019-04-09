import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component{
    PropTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }

    render(){
        const {onClick, completed, text} = this.PropTypes;
        return (
            <li 
                onClick={onClick}
                style={
                    {textDecoration: completed ? 'line-through' : 'none'}
                }
            >
                test : {text}
            </li>
        )
    }
}

export default Todo;