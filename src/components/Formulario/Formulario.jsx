import React, { useState } from 'react';

const Formulario = () => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Nombre:', nombre);
    console.log('Email:', email);
  };

  return (
    <div>
      <h2>Formulario</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;