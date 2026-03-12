import axios from 'axios';

interface RestResult<T> {
  status: boolean;
  message: string;
  data: T | null;
}

/** REST送信 */
export async function sendRest<T>(
  url: string,
  data: unknown,
): Promise<RestResult<T>> {
  const result: RestResult<T> = {
    status: false,
    message: '',
    data: null,
  };

  try {
    const res = await axios.post<T>(url, data);
    result.status = true;
    result.data = res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      result.message = err.response?.data?.error || '送信に失敗しました';
    } else if (err instanceof Error) {
      result.message = err.message;
    } else {
      result.message = '送信に失敗しました';
    }
  }

  return result;
}
