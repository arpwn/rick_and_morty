import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function HomePage(){ 
    return(
        <div className="bg">
            <h1 className="title">
                Bienvenido al mundo de Rick and Morty
                <br />
                <Button variant="primary">
                    <Link to="/character" className="discover">Descubrir</Link>
                </Button>{' '}
            </h1>
        </div>
    )
}