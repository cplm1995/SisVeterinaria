import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    // Hook para navegar entre rutas
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate(); 

    // Función para manejar el envío del formulario
    // Aquí podrías agregar la lógica para autenticar al usuario
    const ingresar = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        // Aquí podrías agregar la lógica para autenticar al usuario
        console.log('Email:', email);
        console.log('Password:', password);
    }


  return (
    <form onSubmit={ingresar} className="container mt-5 p-5 border rounded col-sm-3">
      <div className="mb-3">
        <h1 className="text-center">Iniciar Sesión</h1>
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default LoginForm