import logo from './logo.svg';
import './App.css';
import React, {useState, useRef, useCallback} from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function createBulkTodos() {
  const array = []
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id : i,
      text: `할일 ${i}`,
      checked: false
    })
  }
  return array
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos)

  // 고윳값으로 사용될 id
  // useRef를 사용하여 컴포넌트에서 사용할 변수를 만든다.
  const nextId = useRef(2501)

  // todo 추가
  const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }

      setTodos(todos.concat(todo))
      nextId.current += 1
  }, [todos])

  // todo 삭제
  const onRemove = useCallback(id => {
    const nextTodos = todos.filter(todo => todo.id !== id)
    setTodos(nextTodos)
  }, [todos])

  // todo 체크박스 수정
  const onToggle = useCallback(id => {
    const editTodos = todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)
    setTodos(editTodos)
  }, [todos])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
}

export default App;
