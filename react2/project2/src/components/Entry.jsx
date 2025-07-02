import React from 'react';
import Marker from '../assets/marker.png';

export default function Entry(props) {
  return (
    <article className="entry">
      <img src={props.entry.img.src} alt={props.entry.img.alt} className='country-img' />
      <div className="entry-content">
        <img src={Marker} alt="Marker Icon" className='marker' />
        <span className='country-name'>{props.entry.title}</span>
        <a href={props.entry.maplink} target="_blank" rel="noopener noreferrer"><u>See in Google Maps</u></a>
        <h2>{props.entry.place}</h2>
        <p className='description'>{props.entry.text}</p>
      </div>
    </article>
  );
}