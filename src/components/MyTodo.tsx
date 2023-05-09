import classes from "./MyTodo.module.css";
import {useRef, useContext} from "react";
import { TodoContext } from "../store/todos.context";

const MyTodo:React.FC = ()=>{
    const todoCtx = useContext(TodoContext)
    // props대신에 컨텍스트로 대체한다.

    const todoTextInput = useRef<HTMLInputElement>(null); 

    const submitHandler = (e:React.FormEvent)=>{
        e.preventDefault();    

        const enteredText = todoTextInput.current!.value;
        console.log(enteredText)

        if(enteredText.trim().length === 0){
            return;
        };

        todoCtx.addTodo(enteredText);

        }
    return(
        <form className={classes.form} onSubmit={submitHandler} >
            <label htmlFor="text">할일내용:</label>
            <input ref={todoTextInput} type="text" id="text" />
            <button className={classes.button}>추가</button>
        </form>
    )
}

export default MyTodo;