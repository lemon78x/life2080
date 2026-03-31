export interface ApiResponse<T> {
  status: 'ok' | 'error';
  data?: T;
  message?: string;
}

export interface UserServiceInfo {
  id: string;
  name: string;
  age: number;
}
