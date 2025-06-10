import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Imagen(props) {
    const [gato, setGato] = useState("");

    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/images/search")
            .then(function (response) {
                let gatoResponse = response.data[0].url;
                setGato(gatoResponse);
                if (props.count != 0) props.setText("Gato " + props.count + " generado!");
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [props.count]);

    return (
        <img src={gato}></img>
    )
}
