import React from 'react';
import Header from '../../components/template/Header';
import Table from '../../components/template/Table';
import SearchInput from '../../components/forms/SearchInput';
import "./home.page.css"

export default function Home() {
    return (
        <div>
            <Header />
            <div style={{height: '90vh'}} className=" px-8 mx-auto" style={{maxWidth: '1200px'}}>
                <div className="py-12 flex items-center space-x-4">
                   <SearchInput value={''} placeholder="Buscar por CPF" />
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