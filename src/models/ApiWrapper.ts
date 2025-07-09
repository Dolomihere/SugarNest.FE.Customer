export interface ApiResponse<T> {
  data: T;
  errors: string[];
  isSuccess: boolean;
  message: string;
  meta: any;
  statusCode: number;
}
