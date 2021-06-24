const Contador = ({todos}) => {
    console.log('soy todos', todos)
    return (
        <div class ="contador-tareas">
            <span>Te quedan {todos.filter((todo) =>
            !todo.completed).length} tareas por terminar</span>
        </div>
    );
};

export default Contador;