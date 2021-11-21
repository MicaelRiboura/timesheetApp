import { axios } from "./index";

const list = async (employeeId) => {
  try {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    return await axios
      .get(`/time-workings/${employeeId}`, {
        cancelToken: source.token,
      })
      .then((resp) => {
        return resp;
      });
  } catch (erro) {
    throw erro;
  }
};

// const create = async (employee) => {
//   try {
//     return await axios
//       .post(`/employees`, {
//         ...employee,
//       })
//       .then((resp) => {
//         return resp;
//       });
//   } catch (erro) {
//     throw erro;
//   }
// };

export { list };
