import {useState, useEffect} from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  
  //Estos son estados
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){//para prevenir errores
      localStorage.setItem('todos', JSON.stringify(todos))
    } else {
      const todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  useEffect(() => { 
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filteredHandler = () => {
        switch(status){
          case 'completed' : 
          setFilteredTodos(todos.filter(tarea => tarea.completed === true))
          break;
          case 'uncomplete' : 
          setFilteredTodos(todos.filter(tarea => tarea.completed === false))
          break;
          default:
            setFilteredTodos(todos);
          }
        }
        //gurdar en local storage
        //es buena practica poner este tipo de funciones en useeffect para que no se esten ejecuntando solas
        const saveLocalTodos = () => {
          localStorage.setItem('todos', JSON.stringify(todos))
        };

        filteredHandler()    
        saveLocalTodos()
  }, [todos, status]);//que reaccione cuando el usuario cambie o elimine, o cuando cambie el estado


 

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />      
    </div>
  );
}

export default App;