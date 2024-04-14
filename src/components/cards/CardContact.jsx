import { useState } from 'react';
import CardContactArt from '../../styles/cardContact-art';

export const CardContact = () => {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if( email == '' || password == ''){
      alert('Debe de ingresar un correo y contraseña');
    }
    if(password.length < 8){
      alert('La contraseña debe tener al menos 8 caracteres');
    }

    const isLogin = regexCorreo.test(email);
    if(!isLogin){
      alert('El correo ingresado no es valido');
    }
    if(isLogin && password.length >= 8){
      alert("Has iniciado sesión");
    }
  
  };

  return (
    <CardContactArt>
        <section className='container-contact'>
          <div className='container-form'>
            <div className='form-contact'>
              <form onSubmit={handleSubmit}>
                <p>Login</p>
                <input id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  placeholder='Username/Correo'/>
                <input
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  type="password" 
                  placeholder='Password'/>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
      </section>
    </CardContactArt>
  )
}
