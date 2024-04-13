import { CardContact } from '../components/cards/CardContact'
import { Footer } from '../components/footer/Footer'
import ContactArt from '../styles/contact-art'

export const Login = () => {
  return (
    <ContactArt>
      <section className='title-contact'>
        <h1>Inicia sesión</h1>
        <CardContact className='form'/>
      </section>
      <Footer/>
    </ContactArt>
  )
}
