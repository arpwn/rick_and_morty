import React from 'react'
import Card from 'react-bootstrap/Card'

export default function EpiCard ({ epi }) {

  return (
    <div className="Card">
      <br />

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{epi.episode}</Card.Title>
          <Card.Text>
            <strong>Nombre:</strong> {epi.name} <br />
            <strong>Fecha:</strong> {epi.air_date} <br />
          </Card.Text>
        </Card.Body>
        </Card>
      
    </div>
  )
}