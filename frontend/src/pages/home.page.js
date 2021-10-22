import React from 'react';
import Header from '../components/template/Header';
import Table from '../components/template/Table';
export default function Home() {
    return (
        <div>
            <Header />
            <div style={{height: '90vh'}} className="mx-auto max-w-[1440px] flex justify-center items-center">
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