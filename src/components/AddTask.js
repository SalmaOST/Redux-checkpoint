import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../App.css';

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch (addTodo(input.value) )
                input.value = ''
            }}>
                <input className='Inp'  ref={node => input = node} placeholder='Add ToDo here' />
              
            </form>
        </div>
    )
}

export default connect()(AddTodo)