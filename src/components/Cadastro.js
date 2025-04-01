import { useState, useEffect } from 'react';

function Cadastro() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegistro(e) {
    e.preventDefault();
    if (input.trim() !== '') {
      setTarefas([...tarefas, input]);
      setInput('');
    }
  }

  return (
    <div>
      <h1>Cadastro de Tarefas</h1>
      <form onSubmit={handleRegistro}>
        <input 
          placeholder='Digite uma tarefa' 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Registrar</button>
      </form>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cadastro;