import FormEbook from "./FormEbook";
import {BsTrash as IconTrash} from "react-icons/bs"
import { useEffect,useState } from 'react'
import {TiEdit as IconEdit} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

const ApiIntegrantion = () => {
  const [Ebook, setEbook] = useState(0);
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
        <FormEbook setEbook={setEbook} Ebook={Ebook}/>
    {Ebook 
        && Ebook
      (
        Ebook.map((ebook) =>{
          <div key={ebook.id}>
              <h1>{ebook.name}</h1>
              <p>{ebook.author}</p>
              <p>{ebook.photo}</p>
            <IconTrash 
              onClick={() => handleTrashClick(ebook.id)}
              style={{cursor: 'pointer'}}
             />
            <IconEdit 
               onClick={() => navigate('edit/'+ebook.id)} 
              style={{cursor: 'pointer'}}
          />
        </div>
        }
        )
      )}
  </>
)}
    
export default ApiIntegrantion