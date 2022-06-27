import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'



const FormEco = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const adressRef = useRef();
  const numeroRef = useRef();
  const photoRef = useRef();
  const localizacaoRef = useRef();
  const navigate = useNavigate ();

    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append('name', event.target[0].value);
      formData.append('phone', event.target[1].value);
      formData.append('adress', event.target[2].value);
      formData.append('numero', event.target[3].value);
      formData.append('photo', event.target[4].value);
      formData.append('localizacao', event.target[5].value);
      fetch(
        "http://localhost/reverse--api/api/ecoponto/create",
        {method: 'POST', body: formData}
        )
        .then((response) => response.json())
        .then((data) => {
        nameRef.current.value = ''
        phoneRef.current.value = ''
        adressRef.current.value = ''
        numeroRef.current.value = ''
        photoRef.current.value = ''
        localizacaoRef.current.value = ''
        nameRef.current.focus()
        alert(data.message)
        navigate('/eco-admin/');
        });
    }

    return(
      <>
        <h1>Cadastro</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Nome:</label><input ref={nameRef} type="text" name="name"/>
        <label>Telefone:</label><input ref={phoneRef} type="tel" id="fone" required pattern="[0-9]{2} [0-9]{4}-[0-9]{4}" placeholder="11 9999-9999" name="phone"/>
        <label>Endereço:</label><input ref={adressRef} type="text" name="adress"/>
        <label>Número:</label><input ref={numeroRef} type="tel" name="numero"/>
        <label>Foto:</label><input ref={photoRef} type="text" name="photo"/>
        <label>Localização:</label><input ref={localizacaoRef} type="text" name="localizacao"/>
        <input type="submit" value="Cadastrar"/>
      </form>      
      </>
    )
}

export default FormEco