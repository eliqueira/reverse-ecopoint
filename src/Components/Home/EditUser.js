import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUser = () => {

    const { ebookId } = useParams();
    const [ebook, setEbook] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ebook/select-by-id/?id="+userId)
            .then((response) => response.json())
            .then((data) => setEbook(data));
    }, [ebookId])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', ebookId)
        formData.append('name', event.target[0].value)
        formData.append('author', event.target[1].value)
        formData.append('photo', event.target[2].value)
        fetch(
            "http://localhost/reverse--api/api/ebook/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.ebook?.id){
                    navigate('../');
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    } 

    return (
        <>
        {ebook ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" value={ebook.name} />
                <label>Autor:</label><input type="text" name="author"  value={ebook.author} />
                <label>Foto:</label><input type="file" name="photo"  value={ebook.photo} />
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