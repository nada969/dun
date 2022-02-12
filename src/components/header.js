import React from 'react';
//import {Navbar, Container ,Nav  , Form  , Button } from 'react-bootstrap';

const Header = () =>{
   
    return (
        <div className='header'>
        {/* navbar  */}

             {/* <Navbar  expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img  width="auto" height="185" src="/assets/images/logo.png"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <div style={{padding: '0 0 0 17vh'}}>
                        <Nav className=" my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <a style={{padding: '0 13vh'}} href="#action1"  className='link' >Home</a>
                            <a style={{padding: '0 13vh'}} href="#action2"  className='link' >About</a>
                            <a style={{padding: '0 13vh'}} href="#action1"  className='link' >Value</a>
                            <a style={{padding: '0 13vh'}} href="#action2"  className='link' >Link</a>
                        </Nav>
                    </div>
                    <Form className="d-flex">
                        <Button variant="outline-success">Contact</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
              */}
       
          <div className='nav'>
          
          </div>

        {/* headerBody */}
            <div className='headerBody'>
                <h1>this is title about us</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make</p><br></br><br></br>
                <button className='btn' type='submit' value="Send">Send Message</button>
            </div>
        </div>
    );
}
export default Header;
