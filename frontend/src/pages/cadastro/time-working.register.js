import React, { useEffect, useState } from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Header from "../../components/template/Header";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import Button from "../../components/forms/Button";
// import { create } from "../../services/timeWorking.service";
import { list } from "../../services/occupation.service";
import "react-toastify/dist/ReactToastify.css";
import { notifySuccess } from "../../utils/notify.utils";
import { validateEmptyInput } from "../../utils/validation.utils";

function Cadastro() {
  const [hour, setHour] = useState("");
  const [type, setType] = useState("");
  const [socialId, setSocialId] = useState("");

  const clearFields = () => {
    setHour("");
    setType("");
    setSocialId("");
  };

  const onSubmit = async () => {
    const validateFields =
      validateEmptyInput("nome", hour) &&
      validateEmptyInput("tipo", type) &&
      validateEmptyInput("CPF", socialId);
    console.log("validateFields: ", validateFields);
    if (validateFields) {
      clearFields();
      notifySuccess("Ponto cadastrado com sucesso!");
    }
  };
  useEffect(() => {
    console.log('calcula tempo');
  }, []);   

  return (
    <div>
      <PageTemplateForm
        title="Registre seu Ponto"
        imageSrc="/assets/images/background.jpg"
      >
        <Input
          value={socialId}
          type="text"
          name="cpf"
          placeholder="CPF"
          required
          onChange={(e) => setSocialId(e.target.value)}
        />
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={[
            { value: "start", label: "Entrada" },
            { value: "finish", label: "Saída" },
          ]}
        ></Select>
        <Button type="submit" onClick={onSubmit}>
          Registrar
        </Button>
      </PageTemplateForm>
    </div>
  );
}

export default Cadastro;
