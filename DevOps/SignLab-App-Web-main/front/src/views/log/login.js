import { useNavigate } from 'react-router-dom'
import './login.scss'

const Login = () => {
    const navigate = useNavigate()

    /**
     * It takes the user's input, checks if it's correct, and if it is, it sets the user as logged in
     * and navigates to the translation page
     */
    const login = () => {
        localStorage.setItem('logged', JSON.stringify({logged: true}))
        navigate('/translation')
    }

    return (
        <div className='login'>
            <div className='login-panel'>
                <div className='panel left-side'>

                </div>
                <div className='panel right-side'>
                    <div className='user-informations'>
                        <div className='email'>
                            <span>Email</span>
                            <input placeholder='Email'></input>
                        </div>
                        <div className='password'>
                            <span>Password</span>
                            <input placeholder='Password'></input>
                        </div>
                    </div>
                    <div className='button-register'>
                        <button onClick={() => login()}>Se connecter</button>
                        <span>Pas de compte ? <a onClick={() => navigate('/register')}>S'enregistrer.</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login