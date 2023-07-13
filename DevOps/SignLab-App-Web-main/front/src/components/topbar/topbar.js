import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './topbar.scss'

/**
 * It renders a div with three tabs and a button
 * @returns A div with a list of tabs and a button
 */
const Topbar = () => {
    const [current, setC] = useState(0)
    const onglets = ['Translation', 'History', 'Parameters']
    const navigate = useNavigate()
    /**
     * It removes the logged item from local storage and navigates to the login page
     */
    const logout = () => {
        localStorage.removeItem('logged')
        navigate('/login')
    }

    /**
     * It sets the current onglet to the one that was clicked, and navigates to the corresponding page
     * @param onglet - the name of the tab
     * @param i - the index of the tab
     */
    const moveTo = (onglet, i) => {
        setC(i)
        navigate('/' + onglet.toLowerCase())
    }
    return (
        <div className='topbar'>
            {onglets.map((onglet, i) => <span className={i === current && 'current'} onClick={() => moveTo(onglet,i)}>{onglet}</span>)}
            <button onClick={() => logout()}>Se déconnecter</button>
        </div>
    )
}

export default Topbar