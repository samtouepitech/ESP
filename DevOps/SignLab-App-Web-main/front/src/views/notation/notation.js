import { useNavigate } from 'react-router-dom'
import NotationBlock from '../../components/notationBlock/notationBlock'
import './notation.scss'

const Notation = () => {
    const navigate = useNavigate()
    return (
        <div className='notation'>
            <div className='notation-block'>
                <NotationBlock svg='/img/check.svg' title='La traduction a t-elle été réussi ?' type="checkbox" />
                <NotationBlock svg='/img/edit.svg' title='Donner un nom à la traduction' type="text" />
                <NotationBlock svg='/img/eye.svg' title='Revisualiser la traduction' type={() => navigate('/history')} />
            </div>
            <div className='notation-button'>
                <button onClick={() => navigate('/translation')}>Valider et retourner à la traduction</button>
            </div>
        </div>

    )
}

export default Notation