import { useState } from "react";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import { useAuth } from "../../hooks/auth.hook";
import "./login.page.css"

function Login() {
    const { signIn, error } = useAuth();
    const [socialId, setSocialId ] = useState(null);
    const [password, setPassword ] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(socialId && password) {
            await signIn({ socialId, password });
        }
    }

    return (
        <PageTemplateForm title="Usuário master" imageSrc="/assets/images/background.jpg">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input onChange={(e) => setSocialId(e.target.value)} type="text" placeholder="CPF" className="cpf" required></input>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Código" className="codigo" required></input>
                <button style={{ border: "50px" }}>Enviar</button>
                <p className="text-sm text-red-500 text-center">{error}</p>
            </form>
        </PageTemplateForm>
    );
}

export default Login;