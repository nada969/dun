import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';

const Section1 = () =>{

    const images=[
        {
            src: "https://media.istockphoto.com/photos/new-creative-idea-light-bulb-blackboard-picture-id1152593999?k=20&m=1152593999&s=612x612&w=0&h=PuszPRfZZsematT0uqxTGdDMzPboBFJSQeB9am5b9Wc=",
            thumbnail: "/assets/images/1.jpeg",
            thumbnailWidth: 1900,
            thumbnailHeight: 174,
            isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://cdn.pixabay.com/photo/2017/12/10/04/38/engine-3009242_960_720.jpg",
            thumbnail: "/assets/images/2.jpeg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://i0.wp.com/pswordpress-production.s3.amazonaws.com/2019/11/car-3075480_1280.jpg?fit=1280%2C781&ssl=1",
            thumbnail: "/assets/images/3.jpeg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)"
        }
    ]
        
    return (
        <div className='Section1'>
           <div className='container'>
                <div className='text'>
                    <h3>What we do for you</h3>
                    <p> 'value' Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make 
                    </p>
                </div>
                <div className='pics'>
                    <ResponsiveGallery images={images}/>
               </div>
           </div>
       </div>
    );
}

export default Section1;
