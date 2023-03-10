import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState('');
    const [module, setModule] = useState();
    
    return ( 
     <form>
        <legend>Dados Pessoais</legend>
        <label>
            Nome Completo
            <input
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}>
            </input>
        </label>
        <label>
            Idade
            <input
            type='number'
            id='age'
            value={age}
            onChange={({ target }) => setAge(target.value)}>
            </input>
        </label>
        <label>
            Cidade/UF
            <input
            type='text'
            id='city'
            value={location}
            onChange={({ target }) => setLocation(target.value)}>
            </input>
        </label>
        <label>
            
        </label>
     </form>
    );
}

export default Form;
