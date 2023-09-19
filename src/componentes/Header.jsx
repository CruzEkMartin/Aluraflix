
import { Button } from './Button'
import logo from '../assets/LogoMain.png'

export const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} className='header-logo'></img>
                <Button texto="Nuevo Video"></Button>
            </div>
        </>
    )
}
