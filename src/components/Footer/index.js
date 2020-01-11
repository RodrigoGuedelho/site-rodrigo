
import React from 'react';
import {Card, Button} from 'react-bootstrap'
import imgGithub from '../../assets/github.svg'
import imgLinkedin from '../../assets/linkedin.svg'
import './index.css'


  export default function Footer() {

    return (
      <>  
        <br/>
       
        <footer>
          <Card bg="dark" text="white" >
          <Card.Header >I love software development :)</Card.Header>
          <Card.Body>
            <center>
              <Button className="img-btn" variant="light" target="_blank" href="https://github.com/RodrigoGuedelho">
                <img src={imgGithub} alt="" />
              </Button>
              <Button className="img-btn" variant="light" target="_blank" href="https://www.linkedin.com/in/rodrigo-guedelho-197b9910a/">
                <img src={imgLinkedin} alt="" />
              </Button>
              <br />  
              <small ><b>Email: </b>rodrigohmjj97@hotmail.com</small>
             
            </center>
            
            <Card.Title >copyright © 2020</Card.Title>
            
          </Card.Body>
          </Card>
        </footer>
         
      </>
    );
};





