import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const navigate = useNavigate();

    const {Compo} = props
    const Logedin = false;

    useEffect(()=>{
        if(Logedin === false){
            navigate('/login');
        }
    })

  return (
    <Compo />
  )
}

export default ProtectedRoute