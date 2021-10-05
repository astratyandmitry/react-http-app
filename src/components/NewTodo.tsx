import React from 'react'
import TodoForm from './TodoForm'
import { HttpFirebaseCreateResponse, Todo } from '../types'
import useHttp from '../hooks/http.hook'

interface NewTodoProps {
  onCreated (item: Todo): void;
}

function NewTodo ({ onCreated }: NewTodoProps) {
  const { isLoading, errorMessage, sendRequest } = useHttp()

  const transformer = (todoTitle: string, data: HttpFirebaseCreateResponse) => {
    onCreated({
      id: data.name,
      title: todoTitle,
    })
  }

  const handleCreated = (item: Todo) => {
    sendRequest({
      endpoint: 'todos',
      method: 'POST',
      body: item,
    }, transformer.bind(null, item.title))
  }

  return (
    <div className={'bg-gray-100 p-8 rounded mb-8'}>
      {errorMessage && (
        <div className={'bg-red-500 text-white text-xs mb-4 text-center p-2 rounded'}>
          {errorMessage}
        </div>
      )}

      <TodoForm onCreated={handleCreated} isLoading={isLoading}/>
    </div>
  )
}

export default NewTodo
