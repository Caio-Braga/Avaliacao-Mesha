import React, {useState} from "react";
import './App.css';

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
    return (
    <div className="App">
      <header className="App-header">
        Manga Rosa
      </header>
      <section className="App-section">
        Registro de usuário

        <form>
          <input value={nome} onChange={setNome} placeholder={"Nome"} />
          <input value={cpf} onChange={setCpf} placeholder={"CPF"} />
          <input value={celular} onChange={setCelular} placeholder={"Celular"} />
        </form>

      </section>
    </div>
  );
}

export default App;
