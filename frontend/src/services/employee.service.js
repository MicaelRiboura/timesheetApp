import { axios } from "./index";

const list = async () => {
  try {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    return await axios.get(`/employees`, {
      cancelToken: source.token
    }).then((resp) => {
      return resp;
    });
  } catch (erro) {
    throw erro;
  }
};

const create = async (employee) => {
  try {
    return await axios
      .post(`/employees`, {
        ...employee,
      })
      .then((resp) => {
        return resp;
      });
  } catch (erro) {
    throw erro;
  }
};

export { list, create };
