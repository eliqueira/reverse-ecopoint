import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUser = () => {

    const { userId } = useParams();
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/reverse-api/api/user/select-by-id/?id="+userId)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [userId])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', userId)
        formData.append('name', event.target[0].value)
        formData.append('email', event.target[1].value)
        formData.append('pass', event.target[2].value)
        fetch(
            "http://localhost/reverse-api/api/user/create",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.user?.id){
                    navigate('../');
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
                //setUsers([data.user, ...users])
            })
    } 

    return (
        <>
        {user ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" value={user.name} />
                <label>Email:</label><input type="email" name="email"  value={user.email} />
                <label>Senha:</label><input type="password" name="pass"  value={user.pass} />
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditUser