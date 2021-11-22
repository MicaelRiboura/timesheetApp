import React, { useState } from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import { signUp } from "../../services/auth.service";
import "react-toastify/dist/ReactToastify.css";
import { notifySuccess } from "../../utils/notify.utils";
import { validateEmptyInput } from "../../utils/validation.utils";

function TimeWorkingRegister() {
  const [name, setName] = useState("");
  const [socialId, setSocialId] = useState("");
  const [password, setPassword] = useState("");

  const clearFields = () => {
    setName("");
    setSocialId("");
    setPassword("");
  };

  const onSubmit = async () => {
    const validateFields =
      validateEmptyInput("nome", name) &&
      validateEmptyInput("CPF", socialId) &&
      validateEmptyInput("senha", password);
    console.log("validateFields: ", validateFields);
    if (validateFields) {
      clearFields();
      await signUp({name, socialId, password});
      notifySuccess("Usuário master cadastrado com sucesso!");
    }
  };

  return (
    <div>
      <PageTemplateForm
        title="Cadastro de usuário master"
        imageSrc="/assets/images/background.jpg"
      >
        <Input
          value={name}
          type="text"
          name="nome"
          placeholder="Nome"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={socialId}
          type="text"
          name="cpf"
          placeholder="CPF"
          required
          onChange={(e) => setSocialId(e.target.value)}
        />
        <Input
          value={password}
          type="password"
          name="senha"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={onSubmit}>
          Cadastrar
        </Button>
      </PageTemplateForm>
    </div>
  );
}

export default TimeWorkingRegister;
