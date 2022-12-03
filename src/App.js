import logo from './logo.svg';
import './App.css';
import React, {useState, useRef, useCallback} from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '리액트의 스타일링 해보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    },
  ])

  // 고윳값으로 사용될 id
  // useRef를 사용하여 컴포넌트에서 사용할 변수를 만든다.
  const nextId = useRef(4)

  const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }

      setTodos(todos.concat(todo))
      nextId.current += 1
    }, [todos]
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  )
}

export default App;
