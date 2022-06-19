import {useRef, useEffect} from 'react'

const FormEco = ({Ecoponto, setEcoponto}) => {
  const nameRef = useRef();
  const numberRef = useRef();
  const adressRef = useRef();
  const numeroRef = useRef();
  const photoRef = useRef();

  useEffect(() => {
    nameRef.current.focus()
  },[])


    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append('name', event.target[0].value);
      formData.append('number', event.target[1].value);
      formData.append('adress', event.target[2].value);
      formData.append('numero', event.target[3].value);
      formData.append('photo', event.target[4].value);
      fetch(
        "http://localhost/reverse--api/api/ecoponto/update",
        {method: 'POST', body: formData}
        )
        .then((response) => response.json())
        .then((data) => {
          nameRef.current.value = ''
          numberRef.current.value = ''
          adressRef.current.value = ''
          numeroRef.current.value = ''
          photoRef.current.value = ''
          nameRef.current.focus()
            setEcoponto([data.ecoponto ,...Ecoponto])
          });
    }

    return(
      <form onSubmit={(event) => handleSubmit(event)}>
      <label>Nome:</label><input ref={nameRef} type="text" name="name"/>
    <label for="number">Número:</label><input ref={numberRef} type="tel" id="fone" required pattern="[0-9]{2} [0-9]{4}-[0-9]{4}" placeholder="11 9999-9999" name="number"/>
    <label>Endereço:</label><input ref={adressRef} type="text" name="adress"/>
    <label>Número:</label><input ref={numeroRef} type="tel" name="numero" required pattern="[0-5000]{0-4}"/>
    <label>Foto:</label><input ref={photoRef} type="file" name="photo"/>
      <input type="submit" value="Editar"/>
  </form>
  )
}

export default EditEbook