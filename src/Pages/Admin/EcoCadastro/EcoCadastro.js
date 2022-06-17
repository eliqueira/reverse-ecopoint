import FormEbook from "./FormEbook";
import {BsTrash as IconTrash} from "react-icons/bs"
import { useEffect,useState } from 'react'
import {TiEdit as IconEdit} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

const EcoCadastro = () => {
const [Ecoponto, setEcoponto] = useState(0);
const navigate = useNavigate();

useEffect(() => {
            fetch("http://localhost/reverse--api/api/ecoponto/select-all")
            .then((response) => response.json())
            .then((data) => setEbook(data));
        }, []);

        const handleTrashClick = (EcopontoId) => {
          const formData = new FormData();
          formData.append('id', EcopontoId);
          const urlDelete = "http://localhost/reverse--api/api/ecoponto/delete";
          fetch(urlDelete, {
            method: 'POST',
            body: formData
          })
            .then((response) => response.json())
            .then((data) => {
              alert(data.message)
              let EcopontoFiltered = Ecoponto.filter((Ecoponto) => { return Ecoponto.id !== EcopontoId});
              setEcoponto(EcopontoFiltered)
            });
        }
        

  return (
    <>    
        {/* <FormEbook setEbook={setEbook} Ebook={Ebook}/> */}
        {Ecoponto ?
        (
            Ecoponto.map((Eco) =>{
                <div key={Eco.id}>
                <h1>{Eco.name}</h1>
                <p>{Eco.author}</p>
                <p>{Eco.photo}</p>
                <IconTrash 
                    onClick={() => handleTrashClick(Ecoponto.id)}
                    style={{cursor: 'pointer'}}
                    />
                    <IconEdit 
                    onClick={() => navigate('edit/'+Ecoponto.id)} 
                    style={{cursor: 'pointer'}}
                    />
                </div>
                }
                )
                )}
            </>
            )
}

export default EcoCadastro