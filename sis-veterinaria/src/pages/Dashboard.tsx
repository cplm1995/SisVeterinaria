import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className='container-md mt-5'>
                <h1>Bienvenidos</h1>
                <div className="container">
                    <h1 className="mt-5">Sistema de Citas Veterinarias</h1>
                    <p className="lead">Bienvenido al sistema de gestión de citas para veterinarias.</p>
                    <p>Para comenzar, por favor, inicia sesión o regístrate.</p>
                    <a href="/login" className="btn btn-primary" style={{ marginRight: '10px' }}>Iniciar Sesión</a>
                    <a href="/register" className="btn btn-secondary">Registrarse</a>
                </div>
            </div>
        </>
    );
}

            export default Dashboard