const Contador = ({todos}) => {    

    return (
        <div className="contador-tareas">
          {todos.length === 0 ? <span>¡No quedan tareas pendientes!</span> : <span>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</span>}
        </div>
    );
};

export default Contador;