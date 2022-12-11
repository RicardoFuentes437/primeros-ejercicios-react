import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';

const ComponenteA = ({contacto}) => {
    return (
        <div>
            <h1>Nombre: {contacto.nombre}</h1>
            <h2>Apellido: {contacto.apellido}</h2>
            <h2>Email: {contacto.email}</h2>
            <h2>Estado: {contacto.conectado ? 'Contacto En Línea':'Contacto No Disponible'}</h2>
        </div>
    );
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteA;
