import React from 'react'
import { Todo } from '../types'

interface TodoItemProps {
  item: Todo
}

function TodoItem ({ item }: TodoItemProps) {
  return (
    <div className={'p-2 text-sm text-gray-800'}>
      {item.title}
    </div>
  )
}

export default TodoItem
