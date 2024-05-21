import customAxios from "../lib/customAxios";

export const listSelectApi = async (searchDate) => {
  return await customAxios.post("/patientCase/listSelectApi", searchDate)
}

export const detailSelectApi = async (infoData) => {
  return await customAxios.post("/patientCase/detailSelectApi", infoData)
}

export const insertApi = async (infoData) => {
  return await customAxios.post("/patientCase/insertApi", infoData)
}

export const deleteApi = async (infoData) => {
  return await customAxios.post("/patientCase/deleteApi", infoData)
}