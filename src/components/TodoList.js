import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({todos}) => {
    return (
        // map을 사용해서 컴포넌트로 변환할 때는 key props(고윳값)를 전달해줘야 한다.
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id}/>
            ))}
        </div>
    )
}

export default TodoList