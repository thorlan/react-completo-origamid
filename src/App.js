import React from "react";
import Header from './Header'

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const clientes = [luana, mario];

const App = () => {
  
  return (
    <div>
      <Header/>
      <p>Clientes</p>
      {clientes.map(cliente=>{

        let colorStyle = cliente.ativa ? 'green': 'red';
        
        let total = cliente.compras.map(compra => Number(compra.preco.replace('R$ ', ''))).reduce((a,b) => a+b);

        // Se o gasto for maior que 10000 mostre uma mensagem

        return (
          <div key={cliente.cliente}>
            <p style={{color: colorStyle}}>{cliente.cliente} idade: {cliente.idade}</p>
            {total > 10000 && <p>'Total de compras maior que R$10.000'</p>}
          </div>
        )

      })}
  </div>)
};

export default App;
