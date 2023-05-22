import styles from '../style.module.css'
import shortid from 'shortid'

let Form = ({todo, setTodo, todoList, setTodoList}) => {
    let handleSubmit = (event) => {
        event.preventDefault()
        setTodoList([...todoList, {name: todo, id: shortid.generate()}]);
        setTodo('')
    }
    let removeButton = () => {
        document.getElementById('addButton').style.display = 'none'
    }
    let handleChange = (event) => {
        event.preventDefault()
        setTodo(event.target.value)
        if (event.target.value === '') {
            document.getElementById('addButton').style.display = 'none'
        } else {
            document.getElementById('addButton').style.display = 'initial'
        }
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input onChange={handleChange} value={todo} className={styles.formInput} placeholder={'Add to dos'}></input>
            <button onClick={removeButton} className={styles.inputButton} type={"submit"} id={'addButton'}>Add</button>
        </form>
    )
}
export default Form