import React, { useState } from 'react';
import { Contacto } from '../models/contacto.class';
import ComponenteA from './componenteA';

const ComponenteB = () => {
    const [conectado, setconectado] = useState(false);

    const defaultPerson = new Contacto('Ricardo', 'Fuentes', 'ricardof@gmail.com', conectado);

    const cambiarEstado = () => {
        setconectado(conectado ? false:true);
    }

    return (
        <div>
            <h1>Tu perfil:</h1>
            <ComponenteA contacto={defaultPerson}></ComponenteA>
            <button onClick={cambiarEstado}>Cambiar Estado</button>
        </div>
    );   
}

export default ComponenteB;
