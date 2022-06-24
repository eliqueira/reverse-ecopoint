import './Ecoponto.css'
// import {Button} from 'react-bootstrap';
import {Link,useParams} from 'react-router-dom'
import {useEffect, useState } from 'react'
import {Button} from 'react-bootstrap'

const Ecoponto = () => {
    const {ecoId} = useParams();
    const [eco,setEco] = useState();

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ecoponto/select-all")
        .then((response) => response.json())
        .then((data) => setEco(data));
    }, [ecoId])
    return(
        <section>
            <div className="eco">
                <h1>ECOPONTOS</h1>
                <Link className='point' to="eco">
                    <h5>Ver todos</h5>
                </Link>
                {eco &&
                eco.map((eco) =>{
                    return(
                        <div key={eco.id} className='image'>
                            <div className='ec'>
                                    <img src={eco.photo} alt="Ecoponto"/>
                                <Button href={eco.localizacao}>
                                    <h5>{eco.name}</h5>                            
                                </Button>
                            </div>
                        </div>

                    )

                }
                )}
            </div>
        </section>
    )
};

export default Ecoponto