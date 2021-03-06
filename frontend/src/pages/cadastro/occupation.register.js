import React, { useState } from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Header from "../../components/template/Header";
import "./cadastro-cargo.page.css";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import { create } from "../../services/occupation.service";
import { notifySuccess } from "../../utils/notify.utils";
import { validateEmptyInput } from "../../utils/validation.utils";

function OccupationRegister() {
  const [name, setName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");

  const clearFields = () => {
    setName("");
    setTimeIn("");
    setTimeOut("");
  };

  const onSubmit = async () => {
    const validateFields = 
      validateEmptyInput('nome', name) &&
      validateEmptyInput('hora de entrada', timeIn) &&
      validateEmptyInput('hora de saída', timeOut);
    console.log('validateFields: ', validateFields);
    if(validateFields) {
      const occupation = {
        name,
        time_in: timeIn,
        time_out: timeOut,
      };
      const result = await create(occupation);
      console.log("occupation: ", occupation);
      console.log("result: ", result);
      notifySuccess("Cargo cadastrado com sucesso!");
      clearFields();
    }
  };

  return (
    <div>
      <Header />
      <div>
        <PageTemplateForm
          title="Cadastro de Cargos"
          imageSrc="/assets/images/background.jpg"
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome do Cargo"
            className="nome-cadastro-cargo"
          />
          <Input
            value={timeIn}
            onChange={(e) => setTimeIn(e.target.value)}
            type="text"
            placeholder="Horário de Entrada"
            className="horário-entrada"
          />
          <Input
            value={timeOut}
            onChange={(e) => setTimeOut(e.target.value)}
            type="text"
            placeholder="Horário de Saída"
            className="horário-saída"
          />
          <Button onClick={onSubmit}>Cadastrar</Button>
        </PageTemplateForm>
      </div>
    </div>
  );
}

export default OccupationRegister;
