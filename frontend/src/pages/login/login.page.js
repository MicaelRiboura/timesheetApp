import { useState } from "react";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import PageTemplateForm from "../../components/template/PageTemplateForm";
import { useAuth } from "../../hooks/auth.hook";

function Login({ history }) {
    const { signIn, error } = useAuth();
    const [socialId, setSocialId ] = useState(null);
    const [password, setPassword ] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(socialId && password) {
            await signIn({ socialId, password });
            history.push('/');
        }
    }

    return (
        <PageTemplateForm title="Usuário master" imageSrc="/assets/images/background.jpg">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <Input type="text" name="cpf" placeholder="CPF" required onChange={(e) => setSocialId(e.target.value)} />
                <Input type="password" name="password" placeholder="Senha" required  onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Entrar</Button>
                <p className="text-sm text-red-500 text-center">{error}</p>
            </form>
        </PageTemplateForm>
    );
}

export default Login;