//Import de hooks y variable de firebase
import {useState, useEffect} from 'react';
import {db} from './firebase-config'

//Import de hoja de estilos
import './App.css';

//Import de componentes
import Form from './components/Form';
import TodoList from './components/TodoList';
import Contador from './components/Contador';


function App() {  
  //Estados
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [counter, setCounter] = useState([]);

  //Función traer datos desde Firebase
  const traerDesdeFirebase = () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id})
        });
        setTodos(docs)
    });
  };

  //UseEffect de traer datos desde Firebase
  useEffect(traerDesdeFirebase, []);

  //UseEffect de filtrar datos por completos, incompletos y todos
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
      };
    };
    filteredHandler();
  },[todos, status]);
 

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
      <Contador 
        todos={todos}
        counter={counter}
        setCounter={setCounter}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}        
      />      
    </div>
  );
};

export default App;