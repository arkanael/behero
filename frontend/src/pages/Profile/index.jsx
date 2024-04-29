
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'
import {FiPower, FiTrash2} from 'react-icons/fi'

import './styles.css'

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vindo, FuturoOn</span>
                <Link className='button' to="/incidents/new">Cadastrar nova campanha</Link>
                <button type='button'>
                    <FiPower size={18} color='#E02041'></FiPower>
                </button>
            </header>

            <h1>Campanhas Cadastradas</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Compra de material de limpeza</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Precisamos comprar materiais de limpeza</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <strong>CONTRIBUIR VIA PIX:</strong>
                    <p>CNPJ: 51.662.000/0001-98</p>
                    
                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Aluguel de onibus</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Estamos planejando um passeio</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                    
                    
                    <strong>CONTRIBUIR VIA PIX:</strong>
                    <p>CNPJ: 51.662.000/0001-98</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                   
                    <strong>CONTRIBUIR VIA PIX:</strong>
                    <p>CNPJ: 51.662.000/0001-98</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <strong>CONTRIBUIR VIA PIX:</strong>
                    <p>CNPJ: 51.662.000/0001-98</p>
                                        
                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>
            </ul>
        </div>
    );
}