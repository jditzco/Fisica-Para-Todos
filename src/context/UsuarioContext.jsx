import React from 'react';

export const UsuarioContext = React.createContext();

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = React.useState({});

    return <UsuarioContext.Provider value={{usuario, setUsuario}}>{props.children}</UsuarioContext.Provider>
}

export default UsuarioProvider;


