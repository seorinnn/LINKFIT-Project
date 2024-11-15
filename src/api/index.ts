const API_URL = '/api';

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  body?: any;
  headers?: HeadersInit;
  isFormData?: boolean;
}

export const fetchAPI = async ({
  method,
  endpoint,
  body,
  headers = {},
  isFormData = false,
}: FetchOptions) => {
  const token = localStorage.getItem('accessToken');

  const defaultHeaders: HeadersInit = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(!isFormData && { 'Content-Type': 'application/json' }),
    ...headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: defaultHeaders,
    body: body && !isFormData ? JSON.stringify(body) : body,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // 401 에러 처리: 토큰 만료
      alert('토큰이 만료되었습니다. 재로그인이 필요합니다.');
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
      throw new Error('토큰 만료');
    } else {
      throw new Error('API 요청 실패');
    }
  }

  const contentType = response.headers.get('Content-Type');
  const hasBody = contentType && contentType.includes('application/json');

  // 응답 본문이 있을 때만 JSON으로 변환
  return hasBody ? response.json() : null;
};
