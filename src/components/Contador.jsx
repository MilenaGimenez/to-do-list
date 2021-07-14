// -------------- Componente de contador de tareas pendientes --------------

const Contador = ({todos, counter}) => {  
    counter = todos.length
    return (
        <div className="contador-tareas">
          {counter === 0 ? <span>¡No quedan tareas pendientes!</span> : <span>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</span>}
        </div>
    );
};

export default Contador;