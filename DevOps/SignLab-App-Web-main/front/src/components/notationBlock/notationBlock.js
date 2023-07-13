import { useState } from 'react'
import Checkbox from '../checkbox/checkbox'
import './notationBlock.scss'

const NotationBlock = ({ svg, title, type }) => {
    const [choice, setC] = useState(false)
    return (
        <div className='notationBlock'>
            <div className='top-block'>
                <img src={svg}></img>
                <span>{title}</span>
            </div>
            {(() => {
                switch (type) {
                    case 'checkbox':
                        return (
                            <Checkbox setC={setC} choice={choice} />
                        )
                    case 'text':
                        return (
                            <input type={type} placeholder='name of the translation'></input>
                        )
                    default:
                        return (
                            <span style={{ cursor: 'pointer' }} onClick={type}>Valider et revisualiser dans l'historique</span>
                        )
                }
            })()}
        </div>
    )
}

export default NotationBlock