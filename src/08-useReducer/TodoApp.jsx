import { useReducer } from "react"
import { todoReducer } from "./todoReducer";


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

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}
