// -------------- Componente de Todo (tareas)--------------
//Import de Proptypes
import PropTypes from 'prop-types'

//Import de variable de firebase
import {db} from '../firebase-config';

//Función de mostrar tarea
const Todo = ({todo}) => {
    //Función de eliminar tarea
    const deleteHandler = () => {
        db.collection("todos").doc(todo.id).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };

    //Función de tarea completa
    const completeHandler = () => editarCompleted(todo)
    
    //Función de editar completed
    const editarCompleted = tarea => {
        db.collection("todos").doc(tarea.id).set({
          ...tarea, completed: !tarea.completed
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    };

    return (
          <div className="todo">
              <li className={`todo-item ${todo.completed && "completed"}`}>{todo.text}</li>
              <button onClick={completeHandler} className={`complete-btn ${todo.completed && "boton-rojo"}`}>
                  <i className="fas fa-check"></i>
              </button>
              <button onClick={deleteHandler} className="trash-btn">
                  <i className="fas fa-trash"></i>
              </button>
          </div>
    );
};

Todo.propTypes = {
  deleteHandler: PropTypes.func,
  completeHandler: PropTypes.func,
  editarCompleted: PropTypes.func
};

export default Todo;
