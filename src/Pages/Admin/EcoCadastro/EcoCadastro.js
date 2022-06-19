import {BsTrash as IconTrash} from "react-icons/bs"
import { useEffect,useState } from 'react'
import {TiEdit as IconEdit} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import FormEco from "./FormEco"

const EcoCadastro = () => {
const [Ecoponto, setEcoponto] = useState(0);
const navigate = useNavigate();

useEffect(() => {
            fetch("http://localhost/reverse--api/api/ecoponto/select-all")
            .then((response) => response.json())
            .then((data) => setEcoponto(data));
        }, []);

        const handleTrashClick = (EcopontoId) => {
          const formData = new FormData();
          formData.append('id', EcopontoId);
          const urlDelete = "http://localhost/reverse--api/api/ecoponto/delete";
          fetch(urlDelete, {
            method: 'POST', body: formData
          })
            .then((response) => response.json())
            .then((data) => {
              alert(data.message)
              let EcopontoFiltered = Ecoponto.filter((ecoponto) => { return ecoponto.id !== EcopontoId});
              setEcoponto(EcopontoFiltered)
            });
        }
        

  return (
    <>    
        <FormEco setEcoponto={setEcoponto} Ecoponto={Ecoponto}/>
        {Ecoponto && Ecoponto
        (
            Ecoponto.map((ecoponto) =>{
                <div key={ecoponto.id}>
                <h1>{ecoponto.name}</h1>
                <p>{ecoponto.number}</p>
                <p>{ecoponto.adress}</p>
                <p>{ecoponto.numero}</p>
                <p>{ecoponto.photo}</p>
                <IconTrash 
                    onClick={() => handleTrashClick(ecoponto.id)}
                    style={{cursor: 'pointer'}}
                    />
                    <IconEdit 
                    onClick={() => navigate('edit/'+ecoponto.id)} 
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