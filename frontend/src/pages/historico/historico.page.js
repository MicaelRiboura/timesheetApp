import React, { useEffect, useState } from "react";
import Header from "../../components/template/Header";
import Table from "../../components/template/Table";
import SearchInput from "../../components/forms/SearchInput";
import { ClockOutline } from "heroicons-react";
import { useAuth } from "../../hooks/auth.hook";
import { setServiceToken } from "../../services";
import { notifyError } from "../../utils/notify.utils";
import { list } from "../../services/timeWorking.service";

export default function History() {

  const [employee, setEmployee] = useState({});
  const [timeWorkings, setTimeWorkings] = useState([]);
  const { setSigned, signed } = useAuth();

  const loadTimeWorkings = async () => {
    try {
      const responseEmployees = await list(1);
      console.log("employees: ", responseEmployees);
      console.log("autorizado");
      const employee = responseEmployees.data;
      // delete employee.timeWorkings;
      setEmployee(employee);
      setTimeWorkings(responseEmployees.data.timeWorkings);
    } catch (error) {
      console.log("Não autorizado");
      notifyError("Erro: Não autorizado");
      console.log("Erro: ", error);
      setSigned(false);
    }
  };

  useEffect(() => {
    if (signed) {
      loadTimeWorkings();
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
        <h2 className="py-8 text-4xl text-blue-900 font-semibold">Histórico</h2>
        <div>
          <h2>{employee?.name}</h2>
          <p>CPF: {employee?.socialId}</p>
          <p>Cargo: {employee?.occupation?.name}</p>
        </div>
        <div className="py-12 flex items-center space-x-4">
          <SearchInput placeholder="Buscar por Dia do Mês" />
        </div>
        <Table
          labels={["Data", "Hora de Entrada", "Hora de Saída"]}
          registers={timeWorkings?.map((timeWorking) => [
            <div className="text-sm text-gray-900">{timeWorking.date}</div>,
            <div className="text-sm font-medium text-green-500 flex items-center space-x-1">
              <ClockOutline className="h-4" />
              <span>
                {timeWorking.registers.find((r) => r.type == "start").hour}
              </span>
            </div>,
            <div className="text-sm font-medium text-green-500 flex items-center space-x-1">
              <ClockOutline className="h-4" />
              <span>
                {timeWorking.registers.find((r) => r.type == "finish").hour}
              </span>
            </div>,
          ])}
        />
      </div>
    </div>
  );
}
