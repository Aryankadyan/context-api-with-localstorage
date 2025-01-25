
import { useState, useEffect } from 'react'
import {TodoProvider} from "./context"
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo)=>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
    }

    const updateTodo = (id, todo)=>{
        setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo )))
    }

    const deleteTodo = (id)=>{
        setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
    }

    const toggleComplete=(id)=>{
        // console.log(id)
        setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))

      if(todos && todos.length > 0){
        setTodos(todos)
      }
    }, [])

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    

    return(
        <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
  <div className="bg-[#313d50] py-9">
    

                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-5xl font-bold text-center mb-9 mt-5">Manage Your Todos</h1>
                    <div className="mb-6">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key = {todo.id}
                            className='w-full'
                            >
                                <TodoItem todo={todo}/>
                                 
                            </div>
                        ))}
                        <img src='https://images.pexels.com/photos/1989820/pexels-photo-1989820.jpeg?auto=compress&cs=tinysrgb&w=700'></img>
                    </div>
                </div>
            </div>


            </TodoProvider>
)
}
export default App
