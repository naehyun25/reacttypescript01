import classes from "./TodoItem.module.css"

const TodoItem:React.FC<{text:string}> = (props) =>{
    return(
        <li className={classes.todos}>{props.text}</li>
    )
}

export default TodoItem;