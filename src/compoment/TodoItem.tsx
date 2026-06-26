import "../app/page.css"
interface TodoItemProps {
    todo: {id: number, text: string, completed: boolean};
    handleToggle: (id: number) => void;
    handleDelete:(id: number) => void;
}
function TodoItem({todo,handleToggle, handleDelete}: TodoItemProps) {
    return (
        <div className="todo-item" style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {/* <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)}/> */}
            <div>{todo.text}</div>
            <div className="btn-group">
            <button className="btn itembtn" onClick={() => handleToggle(todo.id)}>切换</button>
            <button className="btn itembtn" onClick={() => handleDelete(todo.id)}>删除</button>
            </div>
        </div>
    )
}
export default TodoItem;