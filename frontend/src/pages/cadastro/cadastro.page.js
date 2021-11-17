import React, { useState } from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Header from "../../components/template/Header";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import Button from "../../components/forms/Button";

function Cadastro() {
  const [socialId, setSocialId] = useState("");
  const [name, setName] = useState("");
  const [occupationId, setOccupationId] = useState("");

  const onSubmit = () => {
    const employee = {
      name,
      socialId,
      occupation_id: occupationId,
    };
    console.log("employee: ", employee);
  };

  return (
    <div>
      <Header />
      <PageTemplateForm
        title="Cadastro de Funcionário"
        imageSrc="/assets/images/background.jpg"
      >
        <Input
          type="text"
          name="nome"
          placeholder="Nome"
          required
          onChange={(e) => setSocialId(e.target.value)}
        />
        <Input
          type="text"
          name="cpf"
          placeholder="CPF"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Select
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
