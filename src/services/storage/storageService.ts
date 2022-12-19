import { ListType } from "../../models/ListType";

export const addToList = (listType: ListType, newId: number) => {
  const LIST_NAME = `${listType}_ids`;
  let list: number[] = [];

  const storedList = localStorage.getItem(LIST_NAME);
  if (storedList) {
    list = JSON.parse(storedList);
  }

  !list.some((id: number) => id === newId) && list.push(newId);
  localStorage.setItem(LIST_NAME, JSON.stringify(list));
};

export const removeFromList = (listType: ListType, removeId: number) => {
  const LIST_NAME = `${listType}_ids`;

  const storedList = localStorage.getItem(LIST_NAME);
  if (storedList) {
    let list = JSON.parse(storedList);
    list = list.filter((id: number) => id !== removeId);
    localStorage.setItem(LIST_NAME, JSON.stringify(list));
  }
};

export const isMovieInList = (listType: ListType, movieId: number) => {
  const LIST_NAME = `${listType}_ids`;

  const storedList = localStorage.getItem(LIST_NAME);
  if (storedList) {
    let list = JSON.parse(storedList);
    return !!list.find((id: number) => id === movieId);
  }
  return false;
};

export const getList = (listType: ListType) => {
  const LIST_NAME = `${listType}_ids`;

  const storedList = localStorage.getItem(LIST_NAME);
  if (storedList) {
    return JSON.parse(storedList);
  }
  return [];
};
