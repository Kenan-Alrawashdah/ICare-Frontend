export class ApiBaseUrl {
  BaseURL: string = 'http://localhost:61236/api/';
}

export class ApiResponseData {
  Data: any;
  success: boolean;
  errors?: string[];
}
