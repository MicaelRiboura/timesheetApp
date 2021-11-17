import { axios, baseUrl } from "./index";

const signIn = async ({ socialId, password }) => {
  try {
    return await axios
      .post(`${baseUrl}/signin`, {
        socialId,
        password,
      })
      .then((resp) => {
        return resp;
      });
  } catch (erro) {
    return erro;
  }
};

export { signIn };
