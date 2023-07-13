import { useNavigate } from 'react-router-dom'
import './bottomBar.scss'
const BottomBar = ({ launchVideo }) => {
    const navigate = useNavigate()
    
    return (
        <div className='bottom-bar'>
            <div className='button first' onClick={() => launchVideo()}>
                <div className='left-asset'>
                    <img src="/img/camera.svg"></img>
                </div>
                <div className='middle-asset'>
                    <span>Flux entrant</span>
                    <label>Lancer la traduction</label>
                </div>
                <img src='/img/right-chevron.svg'></img>
            </div>
            <div className='button second'>
                <div className='left-asset'>
                    <img src="/img/stopwatch.svg"></img>
                </div>
                <div className='middle-asset'>
                    <span>Chargement</span>
                    <label>Patientez pendant la traduction</label>
                </div>
                <img src='/img/right-chevron.svg'></img>
            </div>
            <div className='button third' onClick={() => navigate('/finished')}>
                <div className='left-asset'>
                    <img src="/img/newscreen.svg"></img>
                </div>
                <div className='middle-asset'>
                    <span>Flux sortant</span>
                    <label>Envoyer la réponse</label>
                </div>
                <img src='/img/right-chevron.svg'></img>
            </div>
        </div >
    )
}

export default BottomBar