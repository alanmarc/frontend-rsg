import { Footer } from '../components/footer/Footer';
import TranferArt from '../styles/transfer-art';
import SelectInput from '../components/utils/selectInput';
import { useState } from 'react';


export const Transactions = () => {
  const accounts = ['001547775-6', '02400058714-1', '447512133-6', '103200045-4', '988755400-9'];
  const balances = [
    {
      NoAccount: '001547775-6',
      Balance: '447512133-6',
      Date: '2024-04-13',
      Amount: '$1,450.00'
    },
    {
      NoAccount: '103200045-4',
      Balance: '001547775-6',
      Date: '2024-04-12',
      Amount: '$895.00'
    },
    {
      NoAccount: '910755400-7',
      Balance: '988755400-9',
      Date: '2024-04-11',
      Amount: '$8,455.00'
    },
    {
      NoAccount: '988755400-9',
      Balance: '103200045-4',
      Date: '2024-04-13',
      Amount: '$1,450.00'
    },
    {
      NoAccount: '988755400-9',
      Balance: '2003544-7',
      Date: '2024-04-12',
      Amount: '$895.00'
    },
    {
      NoAccount: '7884033210-1',
      Balance: '588744361-5',
      Date: '2024-04-11',
      Amount: '$8,455.00'
    }
  ];
  const [valorSeleccionado, setValorSeleccionado] = useState('');

  const handleChange = (e) => {
    setValorSeleccionado(e.target.value);
  };
  

  const generarFilas = () => {
    return balances.map((registro, index) => (
      <tr key={index}>
        <td>{registro.NoAccount}</td>
        <td>{registro.Balance}</td>
        <td>{registro.Date}</td>
        <td>{registro.Amount}</td>
      </tr>
    ));
  };

  return (
    <TranferArt>
      <section className='title-contact'>
        <h1>Transactions</h1>
        <div className='container-principal' >
          <div className='container-transfer'>
            <h4>Create new transfer</h4>
            <form className='form-tran'>
                <label>Select origin account:</label>
                <SelectInput
                  opciones={accounts}
                  valorSeleccionado={valorSeleccionado}
                  onChange={handleChange}
                />
                <label>Destination account</label>
                <SelectInput
                  opciones={accounts}
                  valorSeleccionado={valorSeleccionado}
                  onChange={handleChange}
                />
                <label>Amount</label>
                <input placeholder='Ingrese cantidad'/>
                <button >Enviar</button>
            </form>
          </div>
          <div>
            <img src='https://tudashboard.com/wp-content/uploads/2022/02/Grafica-pie-v2-300x253.png'/>
          </div>
        </div>
        <div className="table-container">
          <table border="1">
            <thead>
              <tr>
                <th>Origin Account</th>
                <th>Destination Account</th>
                <th>Transfer Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {generarFilas()}
            </tbody>
          </table>
        </div>
      </section>
      <Footer/>
    </TranferArt>
  )
}
