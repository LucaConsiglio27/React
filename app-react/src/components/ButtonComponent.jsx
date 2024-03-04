import React from 'react'; 

export default function ButtonComponent({texto, color, callback}) {
    const estiloBoton = {
        backgroundColor: color,
        color: 'white',
        margin: '10px',
        borderRadius: '10px',
    };

    return (
        <button 
            onClick={callback}
            style={estiloBoton}
        >
            {texto}
        </button>
    );
}
