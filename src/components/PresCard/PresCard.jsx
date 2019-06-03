import React from 'react'

export const PresCard = (props) => {
  const { number, president, birth_year, death_year, took_office, left_office, party } = props.data;
  return (
    <article className="PresCard">
      <p>Number: {number} </p>
      <p>Name: {president} </p>
      <p>Born: {birth_year}</p>
      <p>Died: {death_year || 'N/A'}</p>
      <p>Took Office: {took_office}</p>
      <p>Left Office: {left_office || 'N/A'}</p>
      <p>Party: {party}</p>
    </article>
  )
}
