import customAxios from "../lib/customAxios";

export const diagListApi = async () => {
  return await customAxios.post("/common/diagListSelect")
}
