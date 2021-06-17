import {db} from '../firebase-config';

const Form = ({setTodos, todos, inputText, setInputText, setStatus}) => {
    const submitTodoHandler = e => {
        e.preventDefault();
        //actualiza la variable que era un arr vacio haciendo una copia del arreglo y añade un objeto nuevo:
        //cada que se hace click, se guarda el input en un objeto
        setTodos([...todos, {
            text: inputText,
            completed: false,
            id: Math.random() * 10000    
        }])
        guardarEnFirebase({
            text: inputText,
            completed: false,
            id: Math.random() * 10000    
        })
        //para que cuando acabe estes vacio
        setInputText('')
    }

    const inputTextHandler = e => {
        setInputText(e.target.value)
    }

    const statusHandler = e => {
        setStatus(e.target.value)
    }

    const guardarEnFirebase = tarea => {
        // Add a new document with a generated id.
        db.collection("todos").add(tarea)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }
   
    return(
        <form>
            <input 
                onChange={inputTextHandler}
                type="text" 
                value={inputText}
                className="todo-input"
            />
            <button 
                disabled={inputText.trim().length
                === 0}
                onClick={submitTodoHandler}
                className="todo-button"
                type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select 
                    name="todos"
                    className="filter-todo"
                    onChange={statusHandler}
                >
                    <option value="all">Todas</option>
                    <option value="completed">Completas</option>
                    <option value="uncomplete">Incompletas</option>
                </select>
            </div>
        </form>        
    );
};

export default Form;