import './TodoTemplate.scss'
import {MdAdd} from 'react-icons/md'

const TodoInsert = ({children}) => {
    return (
        <form className="TodoInsert">
            <input placeholder="할일 입력하세요"/>
            <button type="submit"><MdAdd></MdAdd></button>
        </form>
    )
}

export default TodoInsert