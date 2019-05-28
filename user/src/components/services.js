import React from 'react';
import { Card, CardHeader, CardBody,
     CardText } from 'reactstrap';

import '../styles/App.css';

function services() {
    return (
   <div>
   <h1>Services</h1>
        <div>
      <Card>
        <CardHeader>Individual</CardHeader>
        <CardBody>
        <div id="border">
        <CardIcon top width="100%" src="fas fa-car-side" alt="Card image cap" />
        </div>
          <CardText>Guaranteed convenience <br/>and peace of mind on<br/> costly investments.</CardText>
          
        </CardBody>
      
      </Card>

      <Card>
        <CardHeader>Logistics</CardHeader>
        <CardBody>
        <div id="border">
        <CardIcon top width="100%" src="fas fa-car-side" alt="Card image cap" />
        </div>
          <CardText>Optimal management of <br/>fleet and saftey of goods<br/> in transit.</CardText>
          
        </CardBody>
      
      </Card>

      <Card>
        <CardHeader>Insurance</CardHeader>
        <CardBody>
        <div id="border">
        <CardIcon top width="100%" src="fas fa-car-side" alt="Card image cap" />
        </div>
          <CardText>On-demand premium <br/>inferred from pattern<br/> captured of the insured.</CardText>
          
        </CardBody>
      
      </Card>

      <Card>
        <CardHeader>LSP</CardHeader>
        <CardBody>
        <div id="border">
        <CardIcon top width="100%" src="fas fa-car-side" alt="Card image cap" />
        </div>
          <CardText>Improved location  service<br/>experience with unique<br/> local content.</CardText>
          
        </CardBody>
      
      </Card>

    
    </div>
    </div>
      
    );
  }
  
  export default services;