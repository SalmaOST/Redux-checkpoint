import React from 'react';
import Footer from './components/Footer';
import AddTodo from './components/AddTask';
import VisibleTodoList from './components/VisibleTodoList';
import './App.css';

const App = () => (
    <div className='App'>
        <h3 className='Text'> Here is your ToDo App</h3>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;


