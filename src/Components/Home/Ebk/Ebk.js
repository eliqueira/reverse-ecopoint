import './Ebk.css'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'


const Ebk = () => {
    
    const [ebook, setEbook] = useState(null);

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ebook/select-all")
        .then((response) => response.json())
        .then((data) => setEbook(data));
    }, [])

    return(
        <>
        {ebook &&
        ebook.map((ebook) =>{
            return (
        <div key={ebook.id} className="e">
            <h1>E-BOOKS</h1>
            <Link className='bk' to="ebook">
                <h5>Ver todos</h5>
            </Link>
             <div className='b p-3'>
                <div className='bb'>
                    <div className='be'>
                        <h4>{ebook.name}</h4>
                        <h5>                        
                            {ebook.descricao}
                        </h5>
                        <div className='bi'>
                            <Link className='bo' to="ebook">
                                <h3>Ver</h3>                        
                            </Link>
                        </div>
                    </div>
                    <img src={ebook.photo} alt="niobio"/>
                </div>
            </div>
            </div>
            )
        })}
        {/* <section> */}
        {/* </section> */}
        </>
    )
};

export default Ebk