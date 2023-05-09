import classes from "./TodoItem.module.css"

const TodoItem:React.FC<{text:string; onDeleteTodo : ()=>void}> = (props) =>{
    return(
        <li className={classes.todos} onClick={props.onDeleteTodo}>{props.text}{" "}</li>
    )
}

export default TodoItem;