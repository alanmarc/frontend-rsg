import FooterArt from '../../styles/footer-art'

export const Footer = () => {
  return (
    <FooterArt>
        <div className='footer'>
            <div className='social'>
                <a href='https://github.com/alanmarc' target="_Blank">
                    <img src='https://img.icons8.com/ios-filled/100/000000/github.png'/>
                </a>
                <a href='https://www.linkedin.com/in/alan-marcos-807027228' target="_Blank">
                    <img src='https://img.icons8.com/ios-filled/100/000000/linkedin.png'/>
                </a>
                <a href='mailto:alanmarcs96@gmail.com'>
                    <img src='https://img.icons8.com/material/100/000000/send-mass-email.png'/>
                </a>
                <a href='https://t.me/Alanmarjs' target="_Blank">
                    <img src='https://img.icons8.com/ios-filled/100/000000/telegram-app.png' />
                </a>
            </div>
            <div className='info-footer'>
                <p>Developed and designed by Alan Marcos. ©2024.</p>
            </div>
        </div>
    </FooterArt>
  )
}
