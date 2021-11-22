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
    throw erro;
  }
};

const signUp = async ({ name, socialId, password }) => {
  try {
    return await axios
      .post(`/signup`, {
        name,
        socialId,
        password,
      })
      .then((resp) => {
        return resp;
      });
  } catch (erro) {
    throw erro;
  }
};

const countUsers = async () => {
  try {
    return await axios
      .get(`/users/count`)
      .then((resp) => {
        return resp;
      });
  } catch (erro) {
    throw erro;
  }
};

export { signIn, signUp, countUsers };
