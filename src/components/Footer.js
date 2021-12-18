import logoSymbol from '../logo-symbol.png'
import '../styles/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <img className='logo-symbol' src={logoSymbol}></img>
                <div className='footer-column'>
                    <h4 className='footer-title'>קטגוריות</h4>
                    <p className='footer-option'>כללי</p>
                    <p className='footer-option'>טכנולוגיה</p>
                    <p className='footer-option'>מדע</p>
                    <p className='footer-option'>בריאות</p>
                </div>
                <div className='footer-column'>
                    <h4 className='footer-title'>תנאים</h4>
                    <p className='footer-option'>תנאי שימוש</p>
                    <p className='footer-option'>מדיניות פרטיות</p>
                    <p className='footer-option'>כללים</p>
                </div>             
                <div className='footer-column'>
                    <h4 className='footer-title'>עלינו</h4>
                    <p className='footer-option'>קצת עלינו</p>
                    <p className='footer-option'>מטרת האתר</p>
                    <p className='footer-option'>הרשם אלינו</p>
                </div>
            </div>
            <p className='made-by-text'>Made by Dekel Luski ©</p>
        </div>
    )
}

export default Footer
