//리턴값이 jsx가 아니라서 확장자 ts로 했음.
class Todo{
    id:string;
    text:string;
    constructor(todoText:string){
        this.text=todoText;
        this.id=new Date().toISOString();
        //ios 방식의 시간생성해주는 함수=new Date().toISOString();
    }
}
export default Todo;