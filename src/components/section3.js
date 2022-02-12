/* eslint-disable no-undef */
import React from 'react';
import {CardGroup, Card  } from 'react-bootstrap';
//import { Player , BigPlayButton} from 'video-react';

const Section3 = () =>{
    // PosterImage.propTypes = {

    //     // The poster image url
    //     poster: PropTypes.string,
      
    //   }
    return (
        <div className='Section3'>
           <div className='container'>
           <CardGroup>
                <Card className='contact'>
                    <Card.Body>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='post'>
                    <Card.Body>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
           </div>
       </div>
    );
}

export default Section3;
