import React from "react";

const CharacterContext = React.createContext({
    name: 'Unknown',
    int: 3,
    mot: 3,
    psi: 3,
    fiz: 3,
    lvl: 1,
    prog: 0,
    time: "00:00",
    chapter: 1
});

export default CharacterContext;