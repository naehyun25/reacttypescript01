// 자주 쓰는 속성, 함수, 값을 정의
import React,{ useContext,useState } from "react"
import Todo from "../models/todos";

type Props={
    children: React.ReactNode;
}

type TodoContextObj={
    items: Todo[];
    deleteTodo: (id: string) => void;
    addTodo: (text: string) => void;
}
// const TodoContext=React.createContext<{items: Todo[]; deleteTodo:(id:string)=>void; addTodo:(text:string)=>void}>({
//     items:[],
//     addTodo :()=>{},
//     deleteTodo : ()=>{},
// })
// 위에 코드를 간단히 정리 (TodoContextObj를 생성해서)
const TodoContext=React.createContext<TodoContextObj>({
    items: [], 
    addTodo: () => {}, //함수
    deleteTodo: (id: string) => {}, //함수
})

const TodosContextProvider:React.FC<Props>=({children})=>{
//contextvalue는 컴포넌트에게 context의 변화값 => 이걸 <provider value></provider>를 통해 알려준다. Provider가 설치된 TodoContext의 value 속성을 통해서 전달

const [todos, setTodos] = useState<Todo[]>([]);

const addTodoHandler = (todotext:string) =>{
    const newTodo = new Todo(todotext);
    setTodos((prevTodos)=>{
        //return [...prevTodo, newTodo];
        // concat 두 배열을 합쳐준다.
        return prevTodos.concat(newTodo);
    })
}

const delTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
        return prevTodos.filter((todo) => {
            return todo.id !== todoId;
        });
    });
};
const contextValue={
    items:todos,
    addTodo:addTodoHandler,
    deleteTodo:delTodoHandler,
}

    return(
        <TodoContext.Provider value={contextValue}>
            {children} 
            {/* props하위목록을 전부받을 수 있는 키워드 */}
        </TodoContext.Provider>
    )
}



export {TodoContext, TodosContextProvider};
