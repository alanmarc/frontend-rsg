import { CardContact } from '../components/cards/CardContact'
import { Footer } from '../components/footer/Footer'
import ContactArt from '../styles/contact-art'

export const Transactions = () => {
  return (
    <ContactArt>
      <section className='title-contact'>
        <h1>¡Contactame!</h1>
        <div className='info-contact'>
          <img src="https://img.icons8.com/clouds/400/000000/user.png"/>
          <h2>Alan Marcos</h2>
        </div>
      </section>
      <CardContact/>
      <Footer/>
    </ContactArt>
  )
}
