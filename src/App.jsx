import React from 'react';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
};

const user1 = {
    firstName: 'Mirson',
    lastName: 'Camadrote'
};

const App = () => {
    return <h1>
        Hello, {formatName(user1)}!
    </h1>
};

export default App;