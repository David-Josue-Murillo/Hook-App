import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNweTodo }) => {

    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if(description.length < 1) return; 

        const newTodo = {
            id: new Date().getTime(),
            todo: description,
            done: false
        }

        onResetForm();
        onNweTodo(newTodo);
    }

    return (
        <form className="form-inline" onSubmit={onSubmit}>
            <input type="text" className="form-control" placeholder="¿Que hay que hacer?" name="description" value={description} onChange={onInputChange} />
            <button type="submit" className="btn btn-outline-primary mt-3">Agregar</button>
        </form>
    )
}
