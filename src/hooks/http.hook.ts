import { useCallback, useState } from 'react'
import { HttpHookResponse, HttpHookSendRequestConfig } from '../types'

const FIREBASE_URL = 'https://react-http-app-915e8-default-rtdb.asia-southeast1.firebasedatabase.app'
const DEFAULT_ERROR_MESSAGE = 'Something went wrong!'

const useHttp = (): HttpHookResponse => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const sendRequest = useCallback(async (config: HttpHookSendRequestConfig, transformer: Function) => {
    setIsLoading(true)
    setErrorMessage(null)

    try {
      const response = await fetch(`${FIREBASE_URL}/${config.endpoint}.json`, {
        method: config.method ?? 'GET',
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(DEFAULT_ERROR_MESSAGE)
      }

      transformer(await response.json())
    } catch (error: any) {
      setErrorMessage(error.message || DEFAULT_ERROR_MESSAGE)
    }

    setIsLoading(false)
  }, [])

  return {
    isLoading,
    errorMessage,
    sendRequest,
  }
}

export default useHttp
