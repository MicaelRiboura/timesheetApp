import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/template/Header";
import Table from "../../components/template/Table";
import SearchInput from "../../components/forms/SearchInput";
import { ClipboardCheck } from "heroicons-react";
import { Link } from "react-router-dom";
import { findBySocialId, list } from "../../services/employee.service";
import { useAuth } from "../../hooks/auth.hook";
import { setServiceToken } from "../../services";
import { notifyError } from "../../utils/notify.utils";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const { setSigned, signed } = useAuth();

  const loadEmployees = async () => {
    try {
      const responseEmployees = await list();
      console.log("employees: ", responseEmployees);
      console.log("autorizado");
      
      setEmployees(responseEmployees.data);
    } catch (error) {
      console.log("Não autorizado");
      notifyError('Erro: Não autorizado');
      console.log("Erro: ", error);
      setSigned(false);
    }
  };

  const searchBySocialId = async (socialId) => {
    const response = await findBySocialId(socialId);
    console.log(response.data);
    if(response.data.id) {
      setEmployees([response.data]);
    }
    else {
      const responseEmployees = await list();
      setEmployees(responseEmployees.data);
    }
  }
  
  useEffect(() => {
    if (signed) {
      loadEmployees();
    }
  }, [signed, setServiceToken]);

  return (
    <div>
      <Header />
      <div
        style={{ height: "90vh" }}
        className=" px-8 mx-auto"
        style={{ maxWidth: "1200px" }}
      >
        <h2 className="py-8 text-4xl text-blue-900 font-semibold">
          Funcionários
        </h2>
        <div className="py-12 flex items-center space-x-4">
          <SearchInput
            onChange={(e) => searchBySocialId(e.target.value)}
            placeholder="Buscar por CPF"
          />
        </div>
        <Table
          labels={[
            "CPF",
            "Nome",
            "Cargo",
            "Horário de Entrada",
            "Horário de Saída",
            "Ver histórico",
          ]}
          registers={
            employees &&
            employees?.length > 0 &&
            employees.map((employee) => [
              <div className="text-sm text-gray-900">{employee?.socialId}</div>,
              <div className="text-sm font-medium text-gray-900">
                {employee?.name}
              </div>,
              <div className="text-sm text-blue-400">
                {employee?.occupation.name}
              </div>,
              <div className="text-sm text-gray-900 font-semibold text-center">
                {employee?.occupation.time_in}
              </div>,
              <div className="text-sm text-gray-900 font-semibold text-center">
                {employee?.occupation.time_out}
              </div>,
              <Link to={`/funcionario/historico/${employee?.socialId}`}>
                <div className="flex items-center text-green-500 cursor-pointer">
                  <ClipboardCheck className="h-4" />
                  <span>Histórico</span>
                </div>
              </Link>,
            ])
          }
        />
      </div>
    </div>
  );
}
