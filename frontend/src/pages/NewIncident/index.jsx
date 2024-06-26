import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className='backLink' to="/profile">
                        <FiArrowLeft size={16} color='#E02041'/>
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeholder='Titulo da campanha' />
                    <textarea placeholder='Descrição' />
                    <input placeholder='Valor em reais' />

                    <button className='button' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}