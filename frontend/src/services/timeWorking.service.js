import { axios } from "./index";

const list = async (employeeSocialId) => {
  try {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    return await axios
      .get(`/time-workings/${employeeSocialId}`, {
        cancelToken: source.token,
      })
      .then((resp) => {
        return resp;
      });
  } catch (erro) {
    throw erro;
  }
};

const create = async (timeWorking) => {
  try {
    console.log('timeEorking to be created: ', timeWorking);
    return await axios
      .post(`/time-working`, timeWorking)
      .then((resp) => {
        return resp;
      });
  } catch (erro) {
    throw erro;
  }
};

export { list, create };
