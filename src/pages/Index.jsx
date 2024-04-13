import { Link } from 'react-router-dom';
import { Footer } from '../components/footer/Footer';
import IndexArt from '../styles/index-art';


export const Index = () => {
  return (
    <IndexArt>
      <section className='presentation'>
        <div className='info'>
          <h1>Bienvenido a su portal de cuentas</h1>
          <h2>Inicie sesión</h2>
          <Link className='button-contact' to={"/login"}> Login</Link>
        </div>
      </section>
      <Footer/>
    </IndexArt>
  )
}
