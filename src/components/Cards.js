import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  return (
    <div className='cards'>
      <h1>Event List as of {date}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9-2.jpg'
              text="AP Calculus BC Review Session"
              label='Tutorial Sessions'
              path='/event-[event-code]'
            />
            <CardItem
              src='images/img-2-2.jpg'
              text='AP Physics C Review Session'
              label='Tutorial Sessions'
              path='/event-[event-code]'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3-2.jpg'
              text='AP Chemistry Review Session'
              label='Upcoming Tutorial Sessions'
              path='/event-[event-code]'
            />
            <CardItem
              src='images/img-4-2.jpg'
              text='AP Biology Review Session'
              label='Upcoming Tutorial Sessions'
              path='/event-[event-code]'
            />
            <CardItem
              src='images/img-8-2.jpg'
              text='AP Computer Science Review Session'
              label='Upcoming Tutorial Sessions'
              path='/event-[event-code]'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
