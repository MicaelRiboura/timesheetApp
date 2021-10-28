import React from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import Header from '../../components/template/Header';
import "./cadastro.page.css"

function Cadastro(){
    return(
        <div>
            <Header />
                <div>
                    <PageTemplateForm title="Cadastro de Funcionário" imageSrc="/assets/images/background.jpg">
                        <input type="text" placeholder="Nome" className="nome-cadastro"></input>
                        <input type="text" placeholder="CPF" className="cpf-cadastro"></input>
                        <select className="cargo-cadastro">
                            <option>Cargo</option>
                            <option>Cargo 01</option>
                            <option>Cargo 02</option>
                            <option>Cargo 03</option>
                        </select>
                        <button>Cadastrar</button>
                    </PageTemplateForm>
                </div>
        </div>
    );
}

export default Cadastro;