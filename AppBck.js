import React, { useState } from 'react';

//JSX - JavaScript e XML - quando o HTML está dentro do JS

import Header from './Header';

function App() {
  let [counter, setCounter] = useState(0);

  //USeState retorna um array com 2 posições - Array[valor, função]  --> a função pode alterrar o valor

  function increment(){
    setCounter(counter += 1);

    //console.log(counter);
  }

  return (
    ///<Header title="Semana Oministack"/>
    //<Header>     Semana Oministac    </Header> 
    <div>
      <Header>Contador: {counter}</Header> 
      <button onClick={increment}>Incrementar</button>
    </div>
    

  );
}

export default App;
