import React from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import "./login.page.css"

function Login() {
    return (
        <PageTemplateForm title="Usuário master" imageSrc="/assets/images/background.jpg">
            <input type="text" placeholder="CPF" className="cpf-login" required></input>
            <input type="password" placeholder="Código" className="senha-login" required></input>
            <button>Entrar</button>
        </PageTemplateForm>
    );
}

export default Login;