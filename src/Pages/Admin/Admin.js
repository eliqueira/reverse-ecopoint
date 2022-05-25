import './Admin.css'
import logo from '../../Assets/img/Logo.svg'

function Admin() {
    return(
        <section className="for">
            <div className='dd'>
                <img src={logo}/>
                <h1>LOGIN</h1>
                <div className='in'>
                    <form>
                        <label>Email:</label>
                        <input  type="email" name="email" placeholder="fulanodetaladmin@gmail.com"/>
                        <label>Senha:</label>
                        <input type="password" name="password" placeholder="fulaninho123"/>
                        <input type="submit" value="Logar"/>
                    </form>
                </div>
                </div>
        </section>
    )
};

export default Admin