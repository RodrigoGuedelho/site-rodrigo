import React from 'react';
import {Row, Col, Image} from 'react-bootstrap'
import imgTitulo from "../../assets/avatar.jpg"
import './index.css';

export default function Title(){
  return (
    <Row md={3}> 
      <Col />
      <Col xs={6} md={4}>
        <center>
          <Image src={imgTitulo} roundedCircle  />
          <h1>Rodrigo Guedelho</h1>
          <h3>Desenvolvedor Fullstack</h3>
        </center>
      </Col>
      <Col />
    </Row>
  )
}