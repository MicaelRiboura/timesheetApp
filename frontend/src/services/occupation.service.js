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

const create = async (occupation) => {
  try {
    return await axios
      .post(`/occupation`, {
        ...occupation,
      })
      .then((resp) => {
        return resp;
      });
  } catch (erro) {
    return erro;
  }
};

export { list, create };
