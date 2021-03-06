import './EditEbook.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditEbook = () => {

    const { ebookId } = useParams();
    const [ebook, setEbook] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ebook/select-by-id/?id="+ebookId)
            .then((response) => response.json())
            .then((data) => setEbook(data));
    }, [ebookId])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', ebookId)
        formData.append('name', event.target[0].value)
        formData.append('descricao', event.target[1].value)
        formData.append('author', event.target[2].value)
        formData.append('photo', event.target[3].value)
        formData.append('texto', event.target[4].value)
        fetch(
            "http://localhost/reverse--api/api/ebook/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.ebook?.id){
                    alert(data.message)
                    navigate('/admin');
                } else {
                    console.log(data)
                }
            })
    } 

    return (
        <div className='tre'>
        {ebook ? (
            <form className='tii' onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" defaultValue={ebook.name} />
                <label>Descrição:</label><input type="text" name="descricao" defaultValue={ebook.descricao} />
                <label>Autor:</label><input type="text" name="author"  defaultValue={ebook.author} />
                <label>Foto:</label><input type="photo" name="photo"  defaultValue={ebook.photo} />
                <label>Texto:</label><input type="text" name="texto"  defaultValue={ebook.texto} />
                <input className='cados' type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Ebook não encontrado!</p>)
        }
        </div>
    )
}

export default EditEbook