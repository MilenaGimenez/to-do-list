const Todo = ({todo, setTodos, todos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(tarea => tarea.id !== todo.id))
    }

    const completeHandler = e => {
        setTodos(todos.map(item => {
            if(todo.id === item.id){
                return {
                    ...item, completed: !item.completed //hacemos una copia de ese item, y le metemos lo otro dentro. pone en falso o verdadero el item
                }
            }
            return item; //map necesita un retorno
        }))//setTodos es la funcion que actualiza el estado
    }

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
}

export default Todo;
