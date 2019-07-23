import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../styles/Gallery.scss';


const properties = {
    duration: 7000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return(
    <section className='gallery__background'>    
            <div className='gallery__container'>
                <Fade {...properties}>
                    <div className='each-slide'>
                        <div className='gallery__photo photo-1'>
                            <div className='gallery__content'>
                                <h2 className='gallery__header'>PIZZA STREAT VISION</h2>
                                <p className='gallery__sub-text'>TO BE THE BEST AND LEADING FOOD COMPANY
                                PROVIDERS AROUND THE GLOBE AND TO HIT MORE
                                BRANCHES NATIONWIDE.</p>
                            </div>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div className='gallery__photo photo-2'>
                            <div className='gallery__content'>
                                <h2 className='gallery__header'>PIZZA STREAT MISSION</h2>
                                <p className='gallery__sub-text'>TO BE THE WORLD’S BEST QUICK SERVICE
                                RESTAURANT EXPERIENCE. BEING THE BEST MEANS
                                PROVIDING OUTSTANDING QUALITY, SERVICE,
                                CLEANLINESS AND VALUE, SO THAT WE MAKE EVERY
                                CUSTOMER IN EVERY RESTAURANT SMILE.</p>
                            </div>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div className='gallery__photo photo-3'>
                             <div className='gallery__content'>
                                <h2 className='gallery__header'>PIZZA STREAT VALUES</h2>
                                <p className='gallery__sub-text'>OUR VALUES SUMMARIZED IN “Q.S.C.V.” PROVIDE
                                GOOD QUALITY, SERVICES TO CUSTOMER. HAVE
                                CLEANLINESS ENVIRONMENT WHEN CUSTOMER ENJOYS
                                THEIR MEAL. THE VALUE OF PRODUCT MAKES EVERY
                                CUSTOMER’S SATISFACTION.</p>
                            </div>
                        </div>
                    </div>  
                </Fade>
            </div> 
        </section> 

    )
}

export default Slideshow