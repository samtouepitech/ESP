import { useNavigate } from 'react-router-dom'
import './register.scss'

const Register = () => {
    const navigate = useNavigate()

    /**
     * `register` is a function that takes no arguments and returns nothing. It sets the value of the
     * `logged` key in localStorage to `true` and then navigates to the `/translation` page
     */
    const register = () => {
        localStorage.setItem('logged', JSON.stringify({ logged: true }))
        navigate('/translation')
    }

    return (
        <div className='register'>
            <div className='register-panel'>
                <div className='panel left-side'>

                </div>
                <div className='panel right-side'>
                    <div className='user-informations'>
                        <div className='information-row'>
                            <div className='email'>
                                <span>Prénom</span>
                                <input placeholder='Prénom'></input>
                            </div>
                            <div className='password'>
                                <span>Nom</span>
                                <input placeholder='Nom'></input>
                            </div>
                        </div>
                        <div className='information-row'>
                            <div className='email'>
                                <span>Email</span>
                                <input placeholder='Email'></input>
                            </div>
                            <div className='password'>
                                <span>Phone</span>
                                <input placeholder='Phone'></input>
                            </div>
                        </div>
                        <div className='information-row'>
                            <div className='email'>
                                <span>Password</span>
                                <input type="password" placeholder='Password'></input>
                            </div>
                            <div className='password'>
                                <span>Confirm password</span>
                                <input type="password" placeholder='Confirm password'></input>
                            </div>
                        </div>
                    </div>
                    <div className='button-register'>
                        <button onClick={() => register()}>S'enregistrer</button>
                        <span>Vous avez déjà un compte ? <a onClick={() => navigate('/login')}>Se connecter.</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register