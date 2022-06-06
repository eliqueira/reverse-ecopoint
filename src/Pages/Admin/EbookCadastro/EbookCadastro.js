import { useRef, useEffect} from 'react'
import { useAuth } from '../../../Components/Providers/authProviders';

const EbookCadastro = ({ebookCadasro, setEbookCadastro}) => {

  const nameRef = useRef();
  const authorRef = useRef();
  const photoRef = useRef();
  const { userLogged } = useAuth();

  useEffect(() => {
    nameRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', event.target[0].value);
    formData.append('author', event.target[1].value);
    formData.append('photo', event.target[2].value);
    
    fetch("http://localhost/reverse--api/api/ebook/create", {
        method: 'POST',
        body: formData,
        headers: {
          "Access-Token": userLogged.token
        }
      })
      .then((response) => response.json())
      .then((data) => {
        nameRef.current.value = ''
        authorRef.current.value = ''
        photoRef.current.value = ''
        nameRef.current.focus()
        console.log(data)
        alert(data.message)
      });
  } 

  return (
    <>
    <h1>Cadastrar Ebook</h1>
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Name:</label><input ref={nameRef} type="text" name="name"/>
      <label>Author:</label><input ref={authorRef} type="text" name="author"/>
      <label>Photo:</label><input ref={photoRef} type="text" name="photo"/>
      <input type="submit" value="Cadastrar" />
    </form>
    </>

  )
}

export default EbookCadastro