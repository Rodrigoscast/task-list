import { useState, useEffect } from 'react';
import Cadastro from './components/Cadastro';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [corFundo, setCorFundo] = useState('#ffffff');

  useEffect(() => {
    const nomeSalvo = localStorage.getItem('@nomeUsuario');
    const corSalva = localStorage.getItem('@corFundo');
    
    if (nomeSalvo) {
      setNomeUsuario(nomeSalvo);
    }
    if (corSalva) {
      setCorFundo(corSalva);
    }
  }, []);
  
  useEffect(() => {
    if (!localStorage.getItem('@nomeUsuario')) {
      const nome = prompt('Qual seu nome?');
      if (nome) {
        setNomeUsuario(nome);
        localStorage.setItem('@nomeUsuario', nome);
      }
    }
  }, []);

  return (
    <div style={{ backgroundColor: corFundo, minHeight: '100vh', padding: '20px' }}>
      <h1>Bem-vindo, {nomeUsuario}, sua lista de tarefas</h1>
      <Cadastro />
      <div>
        <h2>Escolha a cor de fundo:</h2>
        <input type="radio" name="cor" value="#ffffff" onChange={() => setCorFundo('#ffffff')} /> Branco
        <input type="radio" name="cor" value="#f0f0f0" onChange={() => setCorFundo('#f0f0f0')} /> Cinza Claro
        <input type="radio" name="cor" value="#add8e6" onChange={() => setCorFundo('#add8e6')} /> Azul Claro
      </div>
    </div>
  );
}

export default App;