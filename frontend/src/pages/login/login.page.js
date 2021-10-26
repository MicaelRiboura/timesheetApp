import PageTemplateForm from "../../components/template/PageTemplateForm";
import "./login.page.css"

function Login() {
    return (
        <PageTemplateForm title="Usuário master" imageSrc="/assets/images/background.jpg">
            <input type="text" placeholder="CPF" className="cpf" required></input>
            <input type="password" placeholder="Código" className="codigo" required></input>
            <button style={{ border: "50px" }}>Enviar</button>
        </PageTemplateForm>
    );
}

export default Login;