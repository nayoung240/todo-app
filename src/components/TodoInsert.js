import './TodoTemplate.scss'
import {MdAdd} from 'react-icons/md'
import {useState, useCallback} from 'react'

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('')

    // 한번 함수를 만드로 재사용
    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, [])

    // onSubmit은 Enter로도 이벤트가 발생한다. onClick은 key이벤트는 걸려있지 않다.
    const onSubmit = useCallback(e => {
        onInsert(value)
        setValue('') // input값 초기화

        // submit 이벤트로 인한 새로고침 방지
        e.preventDefault()
    }, [onInsert, value])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할일 입력하세요" value={value} onChange={onChange}/>
            <button type="submit"><MdAdd></MdAdd></button>
        </form>
    )
}

export default TodoInsert