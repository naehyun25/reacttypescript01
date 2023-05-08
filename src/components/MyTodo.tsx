import classes from "./MyTodo.module.css";
import {useRef} from "react";

//()=>void  함수타입 -> 반환값이 없을 경우 void
const MyTodo:React.FC<{addTodo:(text:string)=>void}> = (props)=>{
    //useRef가 어떤 html 요소에 적용될지 모른다 -> 해당요소에 마우스오버시 타입나옴(참고)
    //초기값설정(null)
    const todoTextInput = useRef<HTMLInputElement>(null); 

    //e는 이벤트 객체지만 e의 type을 모르니까 FormEvent type을 알려준다.
    //MouseEvent = 마우스이벤트(ex.onClick)
    const submitHandler = (e:React.FormEvent)=>{
        e.preventDefault();    

        //옵션설정
        //옵션1. ? => type이 undefined 이거나 사용자정의 타입(undefined포함-and)
        //옵션2. ! => 같지않다. (undefined 미포함 stirng 만포함된다.)
        const enteredText = todoTextInput.current!.value;
        console.log(enteredText)

        if(enteredText.trim().length === 0){
            //trim() 문자열의공백제거함수
            return;
        };

        //props로 addTodo호출 후 enteredText 전달하기
        props.addTodo(enteredText);

        }
    return(
        <form className={classes.form} onSubmit={submitHandler} >
            <label htmlFor="text">할일내용:</label>
            {/* htmlFor 속성은 jsx에서 label의 for 역할*/}
            <input ref={todoTextInput} type="text" id="text" />
            <button>추가</button>
        </form>
    )
}

export default MyTodo;