import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
};

const user1 = {
    firstName: 'Mirson',
    lastName: 'Camadro'
};

const element = (
    <h1>
        Hello, {formatName(user1)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
)


