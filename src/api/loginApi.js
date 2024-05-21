import customAxios from "../lib/customAxios";

export const loginApi = async (infoData) => {
  return await customAxios.post("/login/loginApi", infoData)
}
