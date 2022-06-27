import './CardsEco.css'
import { useEffect, useState} from 'react';
import Link from "@material-ui/core/Link"

const CardsEco = ()  => {
    const [eco, setEco] = useState(null);

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ecoponto/select-all")
        .then((response) => response.json())
        .then((data) => setEco(data));
    }, [])

    return(
        <>
        {eco &&
        eco.map((eco) => {
            return(
                <section className='tudo'>
                    <div key={eco.id} className='cont'>
                        <img  className='ii' variant="top" src={eco.photo} alt='Ebooks'/>
                        <div className='ill'>
                            <h3>{eco.name}</h3>
                            <h5>
                            {eco.phone}
                            <br/>
                            {eco.adress}
                            <br/>
                            N°
                            {eco.numero}
                            </h5>
                            <Link className='bois' href={eco.localizacao}>
                                <h3>
                                    Localizar                                
                                </h3>
                            </Link>
                        </div>
                    </div>
                </section>
            )
        })}
        </>
    )
};

export default CardsEco