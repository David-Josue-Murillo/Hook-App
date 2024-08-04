import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const initialState = [
    {
        id: new Date().getTime(),
        todo: 'Dragon Ball',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        todo: 'Naruto Shippuden',
        done: false
    }
];

const init = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
} 

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const onNweTodo = (todo) => {
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        })
    }

    return (
        <>
            <h1>TodoApp: 10 - <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNweTodo={onNweTodo} />
                </div>
            </div>
        </>
    )
}
