import {useRef, useEffect} from 'react'

const EditEbook = ({Ebook, setEbook}) => {
  const nameRef = useRef();
  const authorRef = useRef();
  const photoRef = useRef();

  useEffect(() => {
    nameRef.current.focus()
  },[])


    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append('name', event.target[0].value);
      formData.append('author', event.target[1].value);
      formData.append('photo', event.target[2].value);
      fetch(
        "http://localhost/reverse--api/api/ebook/update",
        {method: 'POST', body: formData}
        )
        .then((response) => response.json())
        .then((data) => {
        nameRef.current.value = ''
        authorRef.current.value = ''
        photoRef.current.value = ''
        nameRef.current.focus()
          setEbook([data.ebook ,...Ebook])
        });
    }

    return(
    <form onSubmit={(event) => handleSubmit(event)}>
        <label>Nome:</label><input ref={nameRef} type="text" name="name"/>
      <label>Autor:</label><input ref={authorRef} type="author" name="author"/>
      <label>Foto:</label><input ref={photoRef} type="file" name="photo"/>
        <input type="submit" value="Editar"/>
    </form>
    )
}

export default EditEbook