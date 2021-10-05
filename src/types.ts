export interface Todo {
  id?: string;
  title: string;
}

export interface HttpHookResponse {
  isLoading: boolean;
  errorMessage: string | null;

  sendRequest (config: HttpHookSendRequestConfig, transformer: Function): void;
}

export interface HttpHookSendRequestConfig {
  endpoint: string;
  method?: string;
  body?: object;
}

export interface HttpFirebaseCreateResponse {
  name: string;
}
