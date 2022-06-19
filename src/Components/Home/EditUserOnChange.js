import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUserOnChange = () => {

    const { ebookId } = useParams();
    const [ebook, setEbook] = useState();
    const navigate = useNavigate();
    

    useEffect(() => {
        fetch(`http://localhost/reverse--api/api/ebook/select-by-id/?id=${ebookId}`)
            .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => setEbook(data))
            .catch((error) => {
                console.log(error);
            })
    }, [ebookId]);
  
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
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setEbook({...ebook, [name]: value})
    } 
  
    return (
        <>
        {ebook ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" value={ebook.name} onChange={handleChange} />
                <label>Autor:</label><input type="text" name="author"  value={ebook.author} onChange={handleChange} />
                <label>Foto:</label><input type="file" name="photo"  value={ebook.photo} onChange={handleChange} />
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditUserOnChange