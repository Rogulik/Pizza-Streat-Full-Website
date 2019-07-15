import React from 'react'
import Origin from './Origin'
import image from '../img/story-2.jpg'
import '../styles/Story.scss'

export default function Story() {
  return (
    <section className='Story' id='story'>
        <div className='Story__head-container'> 
            <h2 className='Story__head-conianer--header'>
                Every story has the begining...
            </h2>
        </div>
        <div className='Story__content left-position'> 
        <p className='Story__content--text text1' >
        Pizza Streat began on April 8 th , 2015 in the city of Rizal. Our very first branch in St.
        Joseph Subdivision, Cainta Rizal. Focusing on the goals of “Quality and Trendy”. This “Monkey-
        Business” started in two people (girlfriend – boyfriend tandem) who love to dine, eat and
        explore. Year 2014, these two people want to have a small food business, (like a kiosk style).
        They helped each other what food they really wanted, and YES! The girlfriend won! This girl
        wanted to have a Pizza Parlor. And oh! How about the name PIZZA STREAT? Again, this girl
        named it. “Simple and Trendy” PIZZA – is her favorite meal, STREAT - ‘cause we wanted to have
        our store in streets, commercial areas not inside mall or any cozy places, We wanted our store
        in places that people would not be shy whether they are not Class A, nor B. but average people.
        Again, our main goal is SIMPLE yet TRENDY. 
        </p>
        </div>
        <div className='Story__image-container'>
            <img
                src={image}
                alt='one pice of pizza'
                className='Story__image-photo' 
               />
        </div>
        
        <Origin />
    </section>
  )
}