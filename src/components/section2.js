import React from 'react';
import {CardGroup, Card  } from 'react-bootstrap';

const Section2 = () =>{

    return (
        <div className='section2'>
            <div className='container'>
                <div className='section2-body'>
                    <CardGroup>
                        <Card className='contact1'>
                            <Card.Body>
                                <Card.Title>title</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='contact2'>
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer took a galley 
                            </Card.Text>
                            <Card.Title>title</Card.Title>
                                    <Card.Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                        standard dummy text ever since the 1500s, when an unknown printer took 
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    );
}
export default Section2;