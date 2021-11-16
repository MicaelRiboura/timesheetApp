import React from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Header from '../../components/template/Header';
import "./cadastro-cargo.page.css"
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";

function CadastroCargo(){
    return(
        <div>
            <Header />
                <div>
                    <PageTemplateForm title="Cadastro de Cargos" imageSrc="/assets/images/background.jpg">
                        <Input type="text" placeholder="Nome do Cargo" className="nome-cadastro-cargo" />
                        <Input type="text" placeholder="Horário de Entrada" className="horário-entrada" />
                        <Input type="text" placeholder="Horário de Saída" className="horário-saída" />
                        <Button>Cadastrar</Button>
                    </PageTemplateForm>
                </div>
        </div>
    );
}

export default CadastroCargo;