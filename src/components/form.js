import React from 'react';
import emailjs from 'emailjs-com';
import {CardGroup, Card  } from 'react-bootstrap';
import { BsFillTelephoneFill ,BsFacebook ,BsGeoAltFill} from 'react-icons/bs';

const Form = () =>{
///////emailFunction
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_i81o2p6','template_g4ct434',e.target,'user_g2sDb8P2bgDvkvmXDiuLB').then(res=>(
            console.log(res)
        )).catch(err=> console.log(err));
    }

    return (
        <div className='form'>
            <div className='footer'>
                <CardGroup>
                    <Card className='contact'>
                        <Card.Body>
                            <Card.Title>Contact us</Card.Title>
                            <Card.Text>
                                <div className='phnoe' style={{ padding: '0 0 1rem 0' }}>
                                    <a  className='link'  href="tel:+20155551212"><BsFillTelephoneFill/>     0155551212</a>
                                </div>
                                <a className='link' href='https://www.facebook.com/DURacingTeam/' >
                                    <BsFacebook />     https://www.facebook.com/DURacingTeam/
                                </a> <br></br> <br></br>
                                <a className='link' href='duracingteam.ev@gmail.com' >
                                    <BsFillTelephoneFill/>     duracingteam.ev@gmail.com
                                </a> <br></br> <br></br>
                                <a  className='link'  href='https://goo.gl/maps/1c5KHqbdvycnKBoC7'>
                                    <BsGeoAltFill/>     Damietta Universiy, <br></br>     New Damietta 
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='form2'>
                        <Card.Body>
                        <div id="contact-form">
                                <form className='row' onSubmit={sendEmail}>
                                    <b>Name</b>
                                    <input type="text"   name='name'/>
                                    <b>E-mail</b>
                                    <input type="email"   name='user-email' />
                                    <b>Your message</b>
                                    <textarea name='message'></textarea>
                                    <button className='btn' type='submit' value="Send">Send Message</button>
                                </form>
                                </div>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <div className='color'></div>
       </div>
    );
}

export default Form;