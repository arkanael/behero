import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon(){
    return(
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt="Logo" />
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder='Sua ID' />
                    <button type='submit' className='button'>Entrar</button>

                    <Link className='backLink' to="/register">
                        <FiLogIn size={16} color='#E02041'/>
                        Não tenho cadastro
                    </Link>
                </form>    
            </section>
            <img src={heroesImg} alt="Logo" />
        </div>
    );
}