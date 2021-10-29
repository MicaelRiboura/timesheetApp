import React from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Header from '../../components/template/Header';
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import Button from "../../components/forms/Button";

function Cadastro(){
    return(
        <div className="overflow-x-hidden">
            <Header />
            <PageTemplateForm title="Cadastro de Funcionário" imageSrc="/assets/images/background.jpg">
                <Input type="text" name="nome" placeholder="Nome" required />
                <Input type="text" name="cpf" placeholder="CPF" required />
                <Select
                    options={[
                        {value: 'cargo', label: 'Cargo'},
                        {value: 'cargo01', label: 'Cargo 01'},
                        {value: 'cargo02', label: 'Cargo 02'},
                        {value: 'cargo03', label: 'Cargo 03'},
                    ]}
                >
                </Select>
                <Button type="submit">Cadastrar</Button>
            </PageTemplateForm>
        </div>
    );
}

export default Cadastro;