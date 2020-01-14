import React from 'react'
import {CardDeck, Card } from 'react-bootstrap'
import imgNode from '../../assets/nodejs.png'
import imgJava from '../../assets/java.jpeg'
import imgDelphi from '../../assets/delphi.jpg'

export default function CardsStack() {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={imgNode} />
        <Card.Body>
          <Card.Title>Javascript</Card.Title>
          <Card.Text>
            <li>APIs Com typescript e express.</li>
            <li>Frontend com reactJS.</li>
            <li>Mobile com react native.</li> 
            <li>Banco de dados mysql e postgresSQL com sequelize.</li>
            <li>Banco de dados mongoDB com mongoose.</li>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imgJava} />
        <Card.Body>
          <Card.Title>Java</Card.Title>
          <Card.Text>
            <li>JavaEE com EJB, jsf e primefaces.</li>
            <li>GlassFish e Apache Tomcat.</li>
            <li>Spring e thymeleaf.</li>
            <li>JPA e hibernat.</li>  
            <li>Relatórios com iReport.</li> 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imgDelphi} />
        <Card.Body>
          <Card.Title>Delphi 2009</Card.Title>
          <Card.Text>
            <li>Aplicações desktop com delphi 2009.</li>
            <li>Relatórios com Fast Report.</li>
            <li>Banco de dados mysql.</li>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardDeck>
  )
}