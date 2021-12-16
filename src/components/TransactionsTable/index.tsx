import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
  useEffect(() => {
    api.get('transactions')
      .then(data => console.log(data));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
          <tr>
            <td>Desenvolvimento Web</td>
            <td className="deposit">R$12.0000</td>
            <td>Desenvolvimento</td>
            <td>27/03/2021</td>
          </tr>

          <tr>
            <td>Compra de Alimentação</td>
            <td className="withdraw">R$700</td>
            <td>Alimentação</td>
            <td>27/03/2021</td>
          </tr>

          <tr>
            <td>Manutenção do Carro</td>
            <td className="withdraw">R$300</td>
            <td>Transporte</td>
            <td>27/03/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1.100</td>
            <td>Renda</td>
            <td>27/03/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de Um Dashboard Web</td>
            <td className="deposit">R$18.000</td>
            <td>Desenvolvimento</td>
            <td>27/03/2021</td>
          </tr>
        <tbody>

        </tbody>
      </table>
    </Container>
  );
}