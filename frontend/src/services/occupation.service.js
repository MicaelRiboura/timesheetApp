import { axios, baseUrl } from "./index";

const list = async () => {
  try {
    return await axios.get(`${baseUrl}/occupation`).then((resp) => {
      return resp;
    });
  } catch (erro) {
    return erro;
  }
};

export { list };
