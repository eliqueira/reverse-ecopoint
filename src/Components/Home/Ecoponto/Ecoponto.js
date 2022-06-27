import './Ecoponto.css'
import {Link,useParams} from 'react-router-dom'
import {useEffect, useState } from 'react'

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
                        <div key={eco.id} className='oa'>
                            <div >
                                <Link to='eco' className='ei'>
                                    <div className='uai'>
                                        <img src={eco.photo} alt="Ecoponto"/>
                                        <h5>{eco.name}</h5>                            
                                    </div>
                                </Link>
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