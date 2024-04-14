import { Link } from 'react-router-dom';
import { Footer } from '../components/footer/Footer';
import ProjectArt from '../styles/project-art';


export const Accounts = () => {
  const user = "Alan";
  const balances = [
    {
      NoAccount: 123456,
      Balance: 1000,
      Date: '2024-04-13'
    },
    {
      NoAccount: 987654,
      Balance: 2500,
      Date: '2024-04-12'
    },
    {
      NoAccount: 654321,
      Balance: 500,
      Date: '2024-04-11'
    }
  ];

  const generarFilas = () => {
    return balances.map((registro, index) => (
      <tr key={index}>
        <td>{registro.NoAccount}</td>
        <td>{registro.Balance}</td>
        <td>{registro.Date}</td>
      </tr>
    ));
  };

  return (
    <ProjectArt>
      <section className='title-project'>
          <h1>Welcome to your online bancking { user } </h1>
      </section>
      <section className='section-projects'>
        <div className='card-home'>
        <img src="https://tudashboard.com/wp-content/uploads/2022/02/Grafica-pie-v2-300x253.png" alt="Grafico de trensacciones"/>
            <h2>Transactions History</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
            <Link className='button-contact' to={"/transaction"}> ir </Link>
        </div>
        <div className='card-home'>
            <img src="https://www.captio.net/hubfs/hoja-de-gastos-empresa.jpg#keepProtocol" alt="Grafico de trensacciones"/>
            <h2>Main Expenses</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor rutrum tellus, et accumsan velit vulputate quis. Ut feugiat erat nec ligula faucibus auctor. Mauris sodales nibh eu tortor volutpat, at placerat felis dignissim. Sed non lectus at est malesuada feugiat. Suspendisse vehicula diam sed semper vestibulum. Vestibulum aliquet purus vitae lorem sollicitudin malesuada. Nulla facilisi. Nam scelerisque justo eget turpis fringilla posuere. Donec vitae fermentum lectus</p>
        </div>
        <div className='card-home'>
            <h2>Currente balance</h2>
            <div className="table-container">
              <table border="1">
                <thead>
                  <tr>
                    <th>Account No</th>
                    <th>Balanace</th>
                    <th>Date of latest Tranfer</th>
                  </tr>
                </thead>
                <tbody>
                  {generarFilas()}
                </tbody>
              </table>
            </div>
        </div>
      </section>
      <Footer/>
    </ProjectArt>
  )
}
