import React from 'react'

export const PresCard = (props) => {
  const { number, president, birth_year, death_year, took_office, left_office, party } = props.data;
  return (
    <article>
      <p>Number: {number} </p>
      <p>Name: {president} </p>

    </article>
  )
}
