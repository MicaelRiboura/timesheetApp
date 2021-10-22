const Header = () => {
    return (
        <header className="bg-white shadow-lg w-screen py-4">
            <div className="px-8 flex justify-between items-center">
                <div>
                    <div className="logo">

                    </div>
                    <nav>
                        <ul className="flex items-center">
                            <li>
                                <a href="">
                                    <p className="p-2">
                                        <span>Lista de Horários</span>
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <p className="p-2">
                                        <span>Cadastrar Funcionário</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="p-4">
                   <div className="">
                       <span>Sair</span>
                   </div>
                </div>
            </div>
        </header>
    )
}

export default Header;