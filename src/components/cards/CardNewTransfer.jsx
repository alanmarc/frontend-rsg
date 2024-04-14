import TranferArt from '../../styles/transfer-art'

export const CardNewTransfer = () => {
  return (
    <TranferArt>
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
    </TranferArt>
  )
}
