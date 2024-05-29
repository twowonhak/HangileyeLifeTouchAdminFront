import customAxios from "../lib/customAxios";

export const specialNoteListSelectApi = async (infoData) => {
  return await customAxios.post("/specialNote/listSelectApi", infoData)
}

export const specialNoteDetailSelectApi = async (infoData) => {
  return await customAxios.post("/specialNote/detailSelectApi", infoData)
}

export const specialNoteInsertApi = async (infoData) => {
  return await customAxios.post("/specialNote/insertApi", infoData)
}

export const specialNoteDeleteApi = async (infoData) => {
  return await customAxios.post("/specialNote/deleteApi", infoData)
}