import {useState, useEffect} from 'react';
import {db} from './firebase-config'
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  
  //Estos son estados
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const traerDesdeFirebase = () => {
    db.collection("todos").get().then((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          docs.push({...doc.data(), id: doc.id})
        });
        setTodos(docs)
    });
  }


  useEffect(() => { 
    traerDesdeFirebase();
  }, [todos]);

  useEffect(() => {
    const filteredHandler = () => {
      switch(status) {
        case 'completed' :
          setFilteredTodos(todos.filter(tarea => tarea.completed === true))
        break;
        case 'uncompleted' :
          setFilteredTodos(todos.filter(tarea => tarea.completed === false))
        break;
        default:
          setFilteredTodos(todos);
      }
    }
    // const saveLocalTodos = () => {
    //   localStorage.setItem('todos', JSON.stringify(todos))
    // }
    filteredHandler();
    // saveLocalTodos();
  },[todos, status])//que reaccione cuando el usuario cambie o elimine, o cuando cambie el estado


 

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
        status={status}
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