export class ApiResponseData<T> {
  data: T;
  success: boolean;
  errors?: string[];
}
