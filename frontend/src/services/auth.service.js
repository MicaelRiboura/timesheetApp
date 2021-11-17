import { axios } from "./index";

const signIn = async ({ socialId, password }) => {
  try {
    return await axios
      .post(`/signin`, {
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
