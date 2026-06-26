
import TodoItem from "../compoment/TodoItem";
import "../app/page.css"
function TodoList({todos, setTodos}) {
    /**
 * 处理任务完成状态切换的函数
 * @param id - 要切换状态的任务ID
 */
  const handleToggle = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };
/**
 * 处理删除待办事项的函数
 * @param id - 要删除的待办事项的ID
 */
  const handleDelete = (id) => {
  // 使用filter方法过滤掉ID匹配的待办事项，从而实现删除功能
    setTodos(todos.filter(todo => todo.id !== id));
  };
    return (
            <ul className="list-group">
                {todos.map((todo) => (
                    <TodoItem  key={todo.id} todo={todo} handleToggle={()=>handleToggle(todo.id)} handleDelete={()=>handleDelete(todo.id)}/>
                ))}
            </ul>
    );
}
export default TodoList;