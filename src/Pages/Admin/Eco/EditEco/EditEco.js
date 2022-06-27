import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditEco = () => {

    const { ecopontoId } = useParams();
    const [ecoponto, setEcoponto] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ecoponto/select-by-id/?id="+ecopontoId)
            .then((response) => response.json())
            .then((data) => setEcoponto(data));
    }, [ecopontoId])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', ecopontoId)
        formData.append('name', event.target[0].value)
        formData.append('phone', event.target[1].value)
        formData.append('adress', event.target[2].value)
        formData.append('numero', event.target[3].value)
        formData.append('photo', event.target[4].value)
        formData.append('localizacao', event.target[5].value)
        fetch(
            "http://localhost/reverse--api/api/ecoponto/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.ecoponto?.id){
                    alert(data.message)
                    navigate('/eco-admin');
                } else {
                    console.log(data)
                }
            })
    } 

    return (
        <>
        {ecoponto ? (
            <form onSubmit={(event) => handleSubmit(event)}>
            <label>Nome:</label><input type="text" name="name" defaultValue={ecoponto.name}/>
            <label>Telefone:</label><input type="tel" id="fone" name="phone" defaultValue={ecoponto.phone}/>
            <label>Endereço:</label><input type="text" name="adress" defaultValue={ecoponto.adress}/>
            <label>Número:</label><input type="tel" name="numero" defaultValue={ecoponto.numero}/>
            <label>Foto:</label><input type="text" name="photo" defaultValue={ecoponto.photo}/>
            <label>Localização:</label><input type="text" name="localizacao" defaultValue={ecoponto.localizacao}/>
            <input type="submit" value="Editar"/>
          </form>  
            )
        : 
            (<p>Ecoponto não encontrado!</p>)
        }
        </>
    )
}

export default EditEco