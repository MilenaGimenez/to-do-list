// -------------- Componente de TodoList (Filtro de tareas)--------------

//Import de componente Todo
import Todo from './Todo';

//Función para devolver tareas filtradas
const TodoList = ({filteredTodos}) => {
    return(
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo 
                            todo={todo}
                            key={todo.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;