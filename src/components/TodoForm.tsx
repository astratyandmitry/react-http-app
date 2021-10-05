import React, { useRef } from 'react'
import { Todo } from '../types'

interface TodoFormProps {
  isLoading: boolean;

  onCreated (item: Todo): void;
}

function TodoForm ({ isLoading, onCreated }: TodoFormProps) {
  const userInput = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const userInputValue = userInput.current.value

    if (!isLoading && userInputValue.trim().length !== 0) {
      onCreated({
        title: userInputValue,
      })

      userInput.current.value = ''
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className={'space-y-4'}>
      <input
        type="text" ref={userInput} placeholder="Give your ToDo a name"
        className={'p-2 bg-white border rounded w-full'}
      />

      <button type="submit" className={'block w-full bg-blue-600 text-white p-2 rounded'}>
        {isLoading ? 'Creating...' : 'Create Todo'}
      </button>
    </form>
  )
}

export default TodoForm
