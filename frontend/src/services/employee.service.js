import { axios } from "./index";

const list = async () => {
  try {
    return await axios.get(`/employees`).then((resp) => {
      return resp;
    });
  } catch (erro) {
    return erro;
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
    return erro;
  }
};

export { list, create };
