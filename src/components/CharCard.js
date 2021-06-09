import React from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import '../App.js';

export default function CharCard ({ char }) {

return (
    
    <div className="Card">

      <Row xs={4} md={4} className="g-8">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Image src={char.image} alt="img" />
              <Card.Body className="card_body">
                <Card.Title><h1>{char.name}</h1></Card.Title>
                <Card.Text>
                  <p>
                    <strong>Estatus: </strong>
                    {char.status}
                  </p>
                  <p>
                    <strong>Especie: </strong>
                    {char.species}
                  </p>
                  <p>
                    <strong>Genero: </strong>
                    {char.gender}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* <Image src={char.image} alt="img" /> */}

      {/* <img src= /> */}
      {/* <h1>{char.name}</h1>
      <p>I'm {char.status}</p>
      <p>I'm {char.species}</p>
      <p>My gender is {char.gender}</p>
       <br />
       <br />
       <br /> */}
      {/* <Card className={classes.root}>
        <CardActionArea>
          <CardMedia 
            className={classes.media}
            image={char.image}
          />        
          {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2"> */}
            {/* {char.name} */}
          {/* </Typography> */}
          {/* <Typography variant="body2" color="textSecondary" component="p">
            I'm {char.status} <br />
            I'm {char.species} <br />
            My gender is {char.gender} <br />
          </Typography>
          </CardContent> */}
        {/* </CardActionArea> */}
      {/* </Card> */}

      <br />
      <br />

    </div>

  )
}