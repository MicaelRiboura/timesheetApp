import React, { useEffect, useState } from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Header from "../../components/template/Header";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import Button from "../../components/forms/Button";
import { create } from "../../services/employee.service";
import { list } from "../../services/occupation.service";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

function Cadastro() {
  const [socialId, setSocialId] = useState("");
  const [name, setName] = useState("");
  const [occupationId, setOccupationId] = useState("");
  const [occupations, setOccupations] = useState([]);

  const notifySuccess = () => {
    console.log("aqui");
    toast.success("Funcionário cadastrado com sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const clearFields = () => {
    setSocialId("");
    setName("");
    setOccupationId("");
  };

  const onSubmit = async () => {
    const employee = {
      name,
      socialId,
      occupation_id: parseInt(occupationId),
    };
    const result = await create(employee);
    console.log("result: ", result);
    clearFields();
    notifySuccess();
  };

  useEffect(() => {
    async function loadOccupations() {
      const responseOccupations = await list();
      console.log("responseOccupations: ", responseOccupations);
      setOccupations(responseOccupations.data);
    }
    loadOccupations();
  }, []);

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
            ...occupations.map((occupation) => ({
              value: occupation.id,
              label: occupation.name,
            })),
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
