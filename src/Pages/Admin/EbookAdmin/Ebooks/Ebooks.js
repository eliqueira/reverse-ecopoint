import Editar from "../../../../Assets/img/editar.svg"
import Excluir from "../../../../Assets/img/excluir.svg"
import { useEffect,useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const EditEbook = () => {
  const [Ebook, setEbook] = useState();
  const navigate = useNavigate();

useEffect(() => {
    fetch("http://localhost/reverse--api/api/ebook/select-all")
    .then((response) => response.json())
    .then((data) => setEbook(data));
  }, []);

  const handleTrashClick = (EbookId) => {
    const formData = new FormData();
    formData.append('id', EbookId);
    const urlDelete = "http://localhost/reverse--api/api/ebook/delete";
    fetch(urlDelete, {
      method: 'POST', body: formData
    })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message)
      let EbookFiltered = Ebook.filter((ebook) => {return ebook.id !== EbookId});
      setEbook(EbookFiltered)
    });
  }


  return (
  <>
  <Link to={'/ebk-create'}> <button>Criar Ebook</button> </Link>
    {Ebook 
        && 
      (
        Ebook.map((ebook) =>{
          return(

          <div key={ebook.id}>
              <img src={ebook.photo} alt='ebooks'/>
              <div>
                <img src={Editar} alt='editar' 
                onClick={() => navigate('/ebk-edit/edit/'+ebook.id)} 
                style={{cursor: 'pointer'}}
                />
                <img src={Excluir} alt='excluir' 
                onClick={() => handleTrashClick(ebook.id)} 
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
    
export default EditEbook