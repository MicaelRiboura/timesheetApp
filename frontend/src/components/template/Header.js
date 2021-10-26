import { UsersOutline, UserAddOutline, Logout } from "heroicons-react";

const Header = () => {
    return (
        <header className="bg-white shadow-lg w-screen py-4">
            <div className="xl:px-12 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <div className="logo">
                        <img className="cursor-pointer" src="/assets/images/logo.svg" width="80px" alt="logo timesheet" />
                    </div>
                    <nav>
                        <ul className="flex items-center space-x-4">
                            <li>
                                <a href="">
                                    <p className="p-2 flex items-center space-x-1 text-blue-900 hover:bg-gray-50 transition rounded-lg font-semibold">
                                        <UsersOutline className="h-5" />
                                        <span>Funcionários</span>
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <p className="p-2 flex items-center space-x-1 text-blue-900 hover:bg-gray-50 transition rounded-lg font-semibold">
                                        <UserAddOutline className="h-5" />
                                        <span>Cadastrar Funcionário</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="p-4">
                   <div className="flex items-center space-x-1 cursor-pointer font-semibold text-red-900">
                       <Logout className="h-5" />
                       <span>Sair</span>
                   </div>
                </div>
            </div>
        </header>
    )
}

export default Header;