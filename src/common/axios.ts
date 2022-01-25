import axios from "axios";

const instance = axios.create({
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
    return await instance.get(
      `/?q=${q}&part=${part}&key=${key}&maxResults=${maxResults}`
    );
  } catch (error: any) {
    console.log(error);
    throw error.data;
  }
};
