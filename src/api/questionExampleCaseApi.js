import customAxios from "../lib/customAxios";

export const listSelectApi = async (searchDate) => {
  return await customAxios.post("/question/listSelectApi", searchDate)
}

export const detailSelectApi = async (infoData) => {
  return await customAxios.post("/question/detailSelectApi", infoData)
}

export const insertApi = async (infoData) => {
  return await customAxios.post("/question/insertApi", infoData)
}

export const deleteApi = async (infoData) => {
  return await customAxios.post("/question/deleteApi", infoData)
}