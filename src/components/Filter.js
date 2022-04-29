import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../css/cousList.css';

function Filter() {
    const [country, setCountry] = useState("Peru");
    const [city, setCity] = useState("");
    const prevCountryState = useRef("");

    useEffect(() => {
        (prevCountryState.current != "") && (document.getElementById(`${prevCountryState.current}`).style.display = "none");
        document.getElementById(`${country}`).style.display = "inline";
        prevCountryState.current = country;
    }, [country])

    {/* ............. code for filteration .................. */}
    const filterHandler = useMemo(() => {
        const detailRowSelector = document.getElementsByClassName("detailRow");
        Array.from(detailRowSelector).forEach((elements) => {
            const detailRowChild = elements.children;
            (!detailRowChild[4].innerHTML.includes(city)) ? elements.style.display = "none" :
            elements.style.display = "";
        })
    }, [city]);


    return (
        <>
            <label>Select Country and City: </label>
            <select onChange={(e) => setCountry(e.target.value)}>
                <option value="Peru">Peru</option>
                <option value="Taiwan">Taiwan</option>
                <option value="France">France</option>
                <option value="Afghanistan">Afghanistan</option>
            </select>

            {/* ............. list of city .................. */}

            <select onClick={(e) => setCity(e.target.value)} className='cities' id="Peru">
                <option value="Hansenland">Hansenland</option>
                <option value="Collierstad">Collierstad</option>
            </select>

            <select onClick={(e) => setCity(e.target.value)} className='cities' id="Taiwan">
                <option value="New Bryana">New Bryana</option>
                <option value="Morarbury">Morarbury</option>
            </select>

            <select onClick={(e) => setCity(e.target.value)} className='cities' id="France">
                <option value="Vonport">Vonport</option>
                <option value="Jastshire">Jastshire</option>
                <option value="West Esmeralda">West Esmeralda</option>
            </select>

            <select onClick={(e) => setCity(e.target.value)} className='cities' id="Afghanistan">
                <option value="North Bell">North Bell</option>
                <option value="Macejkovicborough">Macejkovicborough</option>
            </select>
            <button onClick={()=>setCity("")}>Reset</button>
        </>
    )
}

export default React.memo(Filter);