import React from "react";

const CharacterContext = React.createContext({
    name: 'Unknown',
    int: 3,
    mot: 3,
    psi: 3,
    fiz: 3
});

export default CharacterContext;