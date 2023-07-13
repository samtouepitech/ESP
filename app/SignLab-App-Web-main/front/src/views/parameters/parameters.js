import BottomBar from '../../components/bottomBar/bottomBar'
import './parameters.scss'

const Parameters = () => {
    return (
        <div className='parameters'>
            <BottomBar />
            <div className='parameters-blocks'>
                <div className='left-block'>
                    <h1 style={{color: 'black'}}>Paramètres</h1>
                    <div className='middle'>
                        <span>Préférences Utilisateur</span>
                    </div>
                </div>
                <div className='right-block'>
                    <h1>Mes informations</h1>
                </div>
            </div>
        </div>
    )
}

export default Parameters