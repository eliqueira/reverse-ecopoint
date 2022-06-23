import Editar from "../../../../Assets/img/editar.svg"
import Excluir from "../../../../Assets/img/excluir.svg"
import { useEffect,useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Ecoponto = () => {
  const [Ecoponto, setEcoponto] = useState();
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
      let EcopontoFiltered = Ecoponto.filter((ecoponto) => {return ecoponto.id !== EcopontoId});
      setEcoponto(EcopontoFiltered)
    });
  }


  return (
  <>
  <Link to={'/eco-create'}> <button Criar Ecoponto/> </Link>
    {Ecoponto 
        && 
      (
        Ecoponto.map((ecoponto) =>{
          return(

          <div key={ecoponto.id}>
              <img src={ecoponto.photo}/>
              <div>
                <img src={Editar} alt='editar' 
                onClick={() => navigate('edit/'+ecoponto.id)} 
                style={{cursor: 'pointer'}}
                />
                <img src={Excluir} alt='excluir' 
                onClick={() => handleTrashClick(ecoponto.id)} 
                style={{cursor: 'pointer'}}
                />
              </div>
        </div>
          )
        }
        )
      )}
  </>
)}
    
export default Ecoponto