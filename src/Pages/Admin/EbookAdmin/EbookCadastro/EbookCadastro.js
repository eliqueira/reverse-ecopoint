import './EbookCadastro.css'
import { useRef} from 'react'
import { useNavigate} from 'react-router-dom'
// import { useAuth } from '../../../Components/Providers/authProviders';

const EbookCadastro = () => {

  const nameRef = useRef();
  const descricaoRef = useRef();
  const authorRef = useRef();
  const photoRef = useRef();
  const textoRef = useRef();
  const navigate = useNavigate();
//   const { userLogged } = useAuth();


  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', event.target[0].value);
    formData.append('descricao', event.target[1].value);
    formData.append('author', event.target[2].value);
    formData.append('photo', event.target[3].value);
    formData.append('texto', event.target[4].value);
    
    fetch("http://localhost/reverse--api/api/ebook/create", {
        method: 'POST',
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        nameRef.current.value = ''
        descricaoRef.current.value = ''
        authorRef.current.value = ''
        photoRef.current.value = ''
        textoRef.current.value = ''
        nameRef.current.focus()
        alert(data.message)
        navigate('/admin/');
      });
  } 

  return (
    <div className='ull'>
      <div className='eee'>
      <h1>Cadastro</h1>
      <form className='eii' onSubmit={(event) => handleSubmit(event)}>
        <label>Nome</label>
        <input ref={nameRef} type="text" name="name"/>

        <label>Descrição</label>
        <input ref={descricaoRef} type="text" name="descricao"/>

        <label>Author</label>
        <input ref={authorRef} type="text" name="author"/>

        <label>Photo</label>
        <input ref={photoRef} type="photo" name="photo"/>

        <label>Texto</label>
        <input ref={textoRef} type="text" name="texto"/>
        
        <input  className='cads' type="submit" value="Cadastrar" />
      </form>
      </div>
    </div>

  )
}

export default EbookCadastro