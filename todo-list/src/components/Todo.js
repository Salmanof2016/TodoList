import styles from '../style.module.css'
import {memo} from "react";

let Todo = ({todoItem , todoList , setTodoList}) => {
    let deleteItem=()=>{
        setTodoList(todoList.filter((item)=>(item.id !== todoItem.id)))
    }
    return (
        <div className={styles.itemTodoListDiv}>
            <h1 className={styles.itemTodoList}>{todoItem.name}</h1>
            <button onClick={deleteItem} className={styles.deleteBtn}>Done</button>
        </div>
    )
}

export default memo(Todo)