import { axios, baseUrl } from "./index";

const list = async () => {
  try {
    return await axios
      .get(`${baseUrl}/employees`, {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("TM:token").replaceAll('"', ""),
        },
      })
      .then((resp) => {
        return resp;
      });
  } catch (erro) {
    return erro;
  }
};

export { list };
