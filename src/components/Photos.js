import React from 'react'
import chef from '../img/chef.svg'
import pizza from '../img/pizza.svg'
import smile from '../img/smile.svg'
import '../styles/Photos.scss'

const Photos = () => {
  
  return (
    <div className='photos__box photo-4'>
        <img src={chef} alt='chef' className='chef svg'/>
      </div>
    <div className='photos__container'>
      <div className='photos__box image-1 darken-pseudo'>
        <Header title='Fresh' />
    </div>
    <div className='photos__box image-5'>
        <img src={pizza} alt='pizza' className='pizza svg'/>
      </div>
    <div className='photos__box image-2 darken-pseudo'>
      <Header title='Delicious' />
    </div>
    <div className='photos__box image-6'>
        <img src={smile} alt='smile' className='smile svg'/>
      </div>
    <div className='photos__box image-3 darken-pseudo'>
      <Header title='Affordable' />
    </div>
      
      
      
    </div>
  )
}

const Header = (props) =>( 

    <h2 
   className='photos__header'
    >
    {props.title}
    </h2>
)

export default Photos