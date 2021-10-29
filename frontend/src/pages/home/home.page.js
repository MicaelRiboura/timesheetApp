import React from 'react';
import Header from '../../components/template/Header';
import Table from '../../components/template/Table';
import SearchInput from '../../components/forms/SearchInput';
import { ClipboardCheck } from "heroicons-react";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Header />
            <div style={{height: '90vh'}} className=" px-8 mx-auto" style={{maxWidth: '1200px'}}>
                <h2 className="py-8 text-4xl text-blue-900 font-semibold">Funcionários</h2>
                <div className="py-12 flex items-center space-x-4">
                   <SearchInput placeholder="Buscar por CPF" />
                </div>
                <Table
                    labels={['CPF', 'Nome', 'Cargo', 'Horário de Entrada', 'Horário de Saída', 'Ver histórico']}
                    registers ={[
                        [
                            (
                                <div className="text-sm text-gray-900">
                                    111.111.111-11
                                </div>
                            ),
                            (
                                <div className="text-sm font-medium text-gray-900">
                                    Micael Riboura dos Santos
                                </div>
                            ),
                            (
                                <div className="text-sm text-blue-400">
                                    Desenvolvedor
                                </div>
                            ),
                            (
                                <div className="text-sm text-gray-900 font-semibold text-center">
                                    8:00
                                </div>
                            ),
                            (
                                <div className="text-sm text-gray-900 font-semibold text-center">
                                    18:00
                                </div>
                            ),
                            (
                                <Link to="/funcionario/historico">
                                    <div className="flex items-center text-green-500 cursor-pointer">
                                        <ClipboardCheck className="h-4" />
                                        <span>Histórico</span>
                                    </div>
                                </Link>
                            ),
                        ],
                        [
                            (
                                <div className="text-sm text-gray-900">
                                    111.111.111-11
                                </div>
                            ),
                            (
                                <div className="text-sm font-medium text-gray-900">
                                    Micael Riboura dos Santos
                                </div>
                            ),
                            (
                                <div className="text-sm text-blue-400">
                                    Desenvolvedor
                                </div>
                            ),
                            (
                                <div className="text-sm text-gray-900 font-semibold text-center">
                                    8:00
                                </div>
                            ),
                            (
                                <div className="text-sm text-gray-900 font-semibold text-center">
                                    18:00
                                </div>
                            ),
                            (
                                <Link to="/funcionario/historico">
                                    <div className="flex items-center text-green-500 cursor-pointer">
                                        <ClipboardCheck className="h-4" />
                                        <span>Histórico</span>
                                    </div>
                                </Link>
                            ),
                        ],
                    ]}
                />
            </div>
        </div>
    );
}