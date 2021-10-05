import React, { useEffect, useState } from 'react'
import { Todo } from './types'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import useHttp from './hooks/http.hook'

function App () {
  const [items, setItems] = useState<Todo[]>([])

  const { isLoading, errorMessage, sendRequest } = useHttp()

  useEffect(() => {
    const transformer = (data: Todo[]) => {
      const transformedData = []

      for (const dataKey in data) {
        transformedData.push({
          id: dataKey,
          title: data[dataKey].title,
        })
      }

      setItems(transformedData)
    }

    sendRequest({
      endpoint: 'todos',
    }, transformer)
  }, [sendRequest])

  const handleItemCreated = (item: Todo) => {
    setItems((prevState => prevState.concat(item)))
  }

  return (
    <div className={'antialiased w-96 mx-auto my-16'}>
      <NewTodo onCreated={handleItemCreated}/>

      <TodoList isLoading={isLoading} errorMessage={errorMessage} items={items}/>
    </div>
  )
}

export default App
