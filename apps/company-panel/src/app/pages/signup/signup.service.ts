import { axiosInstance } from './../../../utils/http';

export async function registerCall(email: string, password: string) {
  const result = await axiosInstance.post('auth/register', { email, password });

  console.log(result);
}
