import { Route } from 'react-router-dom'
import EbookAdmin from '../EbookAdmin/EbookAdmin'
import './Login.css'

function Login() {
    return(
        <section className="for">
            <div className='dd'>
                <h1>LOGIN</h1>
                <div className='in'>
                    <form>
                        <div className='one'>
                            <input type="email" name="email" placeholder="Email..."/>
                        </div>
                        <div className='two'>
                            <input type="password" name="password" placeholder="Senha..."/>
                        </div>
                        <div className='tres'>
                            <Route path='ebk-admin' element={<EbookAdmin/>}>
                                <input type="submit" value="Logar"/>                                                        
                            </Route>
                        </div>
                    </form>
                </div>
                </div>
        </section>
    )
};

export default Login