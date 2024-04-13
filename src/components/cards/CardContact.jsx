import CardContactArt from '../../styles/cardContact-art'

export const CardContact = () => {
  return (
    <CardContactArt>
        <section className='container-contact'>
          <div className='container-form'>
            <div className='form-contact'>
              <form>
                <p>Login</p>
                <input placeholder='Username/Correo'/>
                <input placeholder='Password'/>
                <button >Enviar</button>
              </form>
            </div>
          </div>
      </section>
    </CardContactArt>
  )
}
