import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Task'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = ({ todos, toggleTodo }) => (
    
    <ul className='Tab '>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        )}
    </ul>
   
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList
