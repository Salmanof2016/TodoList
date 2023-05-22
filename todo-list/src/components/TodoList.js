import styles from '../style.module.css'
import Todo from "./Todo";

let TodoList = ({todolist , setTodoList}) => {
    return (
        <div className={styles.todoMainDiv}>
            <h1 className={styles.itemTodo}>Todo List</h1>
            {todolist.map((todoItem) => (
                <Todo setTodoList={setTodoList} todoList={todolist} key={todoItem.id} todoItem={todoItem}></Todo>
            ))}
        </div>
    )
}
export default TodoList