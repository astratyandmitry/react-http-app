import React from 'react'
import { Todo } from '../types'
import TodoItem from './TodoItem'

interface TodoListProps {
  isLoading: boolean;
  errorMessage: string | null;
  items: Todo[]
}

function TodoList ({ isLoading, errorMessage, items }: TodoListProps) {
  return (
    <div className={'border rounded px-4 py-2 divide-y'}>
      {isLoading && (
        <div className={'p-4 my-2 text-center text-blue-500 bg-blue-50 rounded text-xs'}>
          Loading items...
        </div>
      )}

      {!isLoading && errorMessage && (
        <div className={'p-4 my-2 text-center text-red-500 bg-red-50 rounded text-xs'}>
          <div>
            {errorMessage}
          </div>

          <button type={'button'}
                  className={'mt-2 bg-red-600 text-white px-3 py-1 text-x rounded'}
          >
            Reload
          </button>
        </div>
      )}

      {!isLoading && !errorMessage && items.length && items.map((item: Todo) => (
        <TodoItem item={item} key={item.id}/>
      ))}

      {!isLoading && !errorMessage && !items.length && (
        <div className={'p-4 my-2 text-center text-gray-500 bg-gray-50 rounded text-xs'}>
          There is no items yet
        </div>
      )}
    </div>
  )
}

export default TodoList
