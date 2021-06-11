import React, {useState} from "react";
import './App.css';

function App() {
  
  const [form, setForm] = useState({nome:"", email:"", cpf:"", celular:""});
  const registrar = (event) => {
    event.preventDefault()

    const onChange = (event) => {
      const {name, value} = event.target
      setForm({ ...form, [event.target.name]: event.target.value });
    }

  }
    return (
    <div className="App">
      <header className="App-header">
        Manga Rosa
      </header>
      <section className="App-section">
        Registro de usuário

        <form onSubmit={registrar}>
          <input name="nome" value={form.nome} onChange={onChange} placeholder={"Nome"} required/>
          <input name="email" value={form.email} type:email onChange={onChange} placeholder={"Email"} required/>
          <input name="cpf" value={form.cpf} onChange={onChange} placeholder={"CPF"} pattern={"^\d{3}\.\d{3}\.\d{3}\-\d{2}$"} required/>
          <input name="celular" value={form.celular} onChange={onChange} placeholder={"Celular"} pattern={"^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$"} required/>
          <button>Registrar</button>
        </form>

      </section>
    </div>
  );
}

export default App;
