import { httpService } from "./baseHTTP"

export const getBooks = async () => {
  const getbooks = await httpService('books/').then(response => response.data);

  return getbooks;
}

export const delBooks = async (id) => {
  const delbooks = await httpService(`books/${id}`, {
    method: 'delete'
  })

  return delbooks;
}

export const addBooks = async (payload) => {
  const addbooks = await httpService('books/', {
    method: 'post',
    data: payload
  })

  return addbooks
}