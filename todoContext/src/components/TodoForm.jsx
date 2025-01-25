import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
const[todo, setTodo] = useState("")
const {addTodo} = useTodo()

const add =(e)=>{
    e.preventDefault()

    if(!todo) return 

    addTodo({todo, completed: false})
    setTodo("")
}

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write your tasks..."
                className="w-full border border-black/50 rounded-l-lg px-2 outline-none duration-150 bg-white/90 text-black py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} 
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-500 hover:bg-orange-500 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

