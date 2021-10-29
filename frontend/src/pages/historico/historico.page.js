import React from 'react';
import Header from '../../components/template/Header';
import Table from '../../components/template/Table';
import SearchInput from '../../components/forms/SearchInput';

export default function History() {
    return (
        <div>
            <Header />
            <div style={{height: '90vh'}} className=" px-8 mx-auto" style={{maxWidth: '1200px'}}>
                <h2 className="py-8 text-4xl text-blue-900 font-semibold">Histórico</h2>
                <div>
                    <h2>Nome</h2>
                    <p>CPF: 111.111.111-11</p>
                    <p>Cargo: Desenvolvedor</p>
                </div>
                <div className="py-12 flex items-center space-x-4">
                   <SearchInput placeholder="Buscar por Dia do Mês" />
                </div>
                <Table
                    labels={['Data', 'Hora de Entrada', 'Hora de Saída']}
                    registers ={[
                        [
                            (
                                <div className="text-sm text-gray-900">
                                    28/10/2021
                                </div>
                            ),
                            (
                                <div className="text-sm font-medium text-green-500">
                                   8:00
                                </div>
                            ),
                            (
                                <div className="text-sm font-medium text-green-500">
                                   8:00
                                </div>
                            ),
                        ],
                    ]}
                />
            </div>
        </div>
    );
}