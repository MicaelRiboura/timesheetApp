import React from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Header from '../../components/template/Header';
import "./cadastro-cargo.page.css"

function CadastroCargo(){
    return(
        <div>
            <Header />
                <div>
                    <PageTemplateForm title="Cadastro de Cargos" imageSrc="/assets/images/background.jpg">
                        <input type="text" placeholder="Nome do Cargo" className="nome-cadastro-cargo"></input>
                        <input type="text" placeholder="Horário de Entrada" className="horário-entrada"></input>
                        <input type="text" placeholder="Horário de Saída" className="horário-saída"></input>
                        <button>Cadastrar</button>
                    </PageTemplateForm>
                </div>
        </div>
    );
}

export default CadastroCargo;