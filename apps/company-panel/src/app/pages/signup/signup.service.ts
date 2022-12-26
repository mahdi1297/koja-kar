import { axiosInstance } from './../../../utils/http';

export async function registerCall(email: string, password: string) {
  const result = await axiosInstance.post('company/register', {
    email,
    password,
  });

  console.log(result);
}
