import PageTemplateForm from "../../components/template/PageTemplateForm";
import { useAuth } from "../../hooks/auth.hook";
import "./login.page.css"

function Login() {
    const { userSignIn } = useAuth();

    const handleSignIn = async () => {
        await userSignIn({ socialId: '111.111.111-11', password: '123456'});
        console.log('foi');
    }

    return (
        <PageTemplateForm title="Usuário master" imageSrc="/assets/images/background.jpg">
            <input type="text" placeholder="CPF" className="cpf" required></input>
            <input type="password" placeholder="Código" className="codigo" required></input>
            <button style={{ border: "50px" }} onClick={() => handleSignIn()}>Enviar</button>
        </PageTemplateForm>
    );
}

export default Login;