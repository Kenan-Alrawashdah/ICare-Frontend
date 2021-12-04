export class ApiResponseData<T=undefined> {
  data: T;
  success: boolean;
  errors?: string[];
}
