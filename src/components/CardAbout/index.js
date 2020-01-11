import React from 'react'
import {Card} from 'react-bootstrap'

export default function CardAbout(){

  return (
    <Card>
      <Card.Header as="h5">Sobre</Card.Header>
      <Card.Body>
        
        <Card.Text>
        Sou amante do desenvolvimento de software, tendo a formação de bacharel 
        em sistema de informação e pós graduando em Engenharia de software. Durante 
        uma jornada de mais de 4 anos como desenvolvedor, tive varias experiências 
        em sistemas de recursos humanos, frotas(controle de combustível, pneus e lubrificantes), 
        vendas, prontuários, financeiro, entre outros.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}