import React, { useState } from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Header from "../../components/template/Header";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import Button from "../../components/forms/Button";
import { create } from "../../services/employee.service";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

function Cadastro() {
  const [socialId, setSocialId] = useState("");
  const [name, setName] = useState("");
  const [occupationId, setOccupationId] = useState("");

  const notifySuccess = () => {
    console.log("aqui");
    toast.success("Funcionário cadastrado com sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
  };

  const onSubmit = async () => {
    const employee = {
      name,
      socialId,
      occupation_id: parseInt(occupationId),
    };
    // const result = await create(employee);
    // console.log("result: ", result);
    setSocialId("");
    setName("");
    setOccupationId("");
    notifySuccess();
  };

  return (
    <div>
      <Header />
      <PageTemplateForm
        title="Cadastro de Funcionário"
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
        <Select
          value={occupationId}
          onChange={(e) => setOccupationId(e.target.value)}
          options={[
            { value: "", label: "Cargo" },
            { value: "1", label: "Cargo 01" },
            { value: "2", label: "Cargo 02" },
            { value: "3", label: "Cargo 03" },
          ]}
        ></Select>
        <Button type="submit" onClick={onSubmit}>
          Cadastrar
        </Button>
      </PageTemplateForm>
    </div>
  );
}

export default Cadastro;
