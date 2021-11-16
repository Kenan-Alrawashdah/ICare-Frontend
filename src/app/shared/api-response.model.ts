export class ApiBaseUrl {
  BaseURL: string = 'http://localhost:61236/api/';
}

export class ApiResponseData<T> {
  Data: T;
  success: boolean;
  errors?: string[];
}
