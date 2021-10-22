import React from 'react';
import Header from '../components/template/Header';
import Table from '../components/template/Table';
import { Search } from "heroicons-react";
export default function Home() {
    return (
        <div>
            <Header />
            <div style={{height: '90vh'}} className=" px-8 mx-auto" style={{maxWidth: '1200px'}}>
                <div className="py-12 flex items-center space-x-4">
                    <div className="border border-blue-900 rounded-sm outline-none p-1 flex items-center bg-white focus:outline-none">
                        <input type="text" className="" placeholder="Buscar por CPF" />
                        <Search className="h-4 text-blue-900" />
                    </div>
                </div>
                <Table
                    labels={['CPF', 'Nome', 'Cargo', 'Horário de Entrada', 'Horário de Saída']}
                    registers ={[
                        {
                            cpf: '111.111.111-11',
                            name: 'Micael Riboura dos Santos',
                            role: 'Desenvolvedor',
                            startTime: '8:00',
                            finishTime: '18:00'
                        },
                        {
                            cpf: '111.111.111-11',
                            name: 'Micael Riboura dos Santos',
                            role: 'Desenvolvedor',
                            startTime: '8:00',
                            finishTime: '18:00'
                        },
                        {
                            cpf: '111.111.111-11',
                            name: 'Micael Riboura dos Santos',
                            role: 'Desenvolvedor',
                            startTime: '8:00',
                            finishTime: '18:00'
                        },
                        {
                            cpf: '111.111.111-11',
                            name: 'Micael Riboura dos Santos',
                            role: 'Desenvolvedor',
                            startTime: '8:00',
                            finishTime: '18:00'
                        },
                        {
                            cpf: '111.111.111-11',
                            name: 'Micael Riboura dos Santos',
                            role: 'Desenvolvedor',
                            startTime: '8:00',
                            finishTime: '18:00'
                        },
                    ]}
                />
            </div>
        </div>
    );
}