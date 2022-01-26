import axios from "axios";

const instance = axios.create({
  // TODO: dotenv, envcmd 같은 env 라이브러리 찾아서 env로 처리해보세용
  baseURL: "https://www.googleapis.com/youtube/v3/search",
});

interface TRequest {
  q: string;
  part: string;
  key: string;
  maxResults: number;
}

export const onRequestSearch = async ({
  q,
  part,
  key,
  maxResults,
}: TRequest) => {
  try {
    // TODO: request 범용성 따져서 다시 짜기
    // ex) method, endpoint, query, headers, body 등 받아서 내부 로직 처리
    return await instance.get(
      `/?q=${q}&part=${part}&key=${key}&maxResults=${maxResults}`
    );
  } catch (error: any) {
    console.log(error);
    throw error.data;
  }
};
