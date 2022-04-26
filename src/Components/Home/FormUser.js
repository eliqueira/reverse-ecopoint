import React from "react";

const FormUser = ({users, setUsers}) => {

    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append('name', event.target[0].value);
      formData.append('email', event.target[1].value);
      formData.append('pass', event.target[2].value);
      fetch(
        "http://localhost/reverse-api/api/user/create",
        {method: 'POST', body: formData}
        )
        .then((response) => response.json())
        .then((data) => {
          alert(data.message)
          setUsers([...users, data.user])
        });
    }

    return(
    <form onSubmit={(event) => handleSubmit(event)}>
        <label>Nome: </label><input type="text"  name="nome"/>
        <label>Email: </label><input type="email" name="email"/>
        <label>Senha: </label><input type="password" name="senha"/>
        <input type="submit" value="Cadastrar"/>
    </form>
    )
}

export default FormUser