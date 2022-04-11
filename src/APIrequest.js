import React , {useState,useEffect} from "react";
import './Apirequest.css';

const ApiRequest = () => {
    const [paises, SetPaises] = useState(null);

    useEffect(() => {
        fetch("https://testcountries.com/v2/all")
        .then((response) => response.json())
        .then((data) => SetPaises(data));
    }, []);

    return(
        <div className="Apirequest">
        <select>
        {paises &&
        paises.map((pais, i) => {
            return <option key={i}>{pais.name}</option>;
        })
        }
        </select>
        </div>
    );
};

export default ApiRequest;