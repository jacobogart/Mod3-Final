import React from 'react';
import { connect } from 'react-redux';
import { PresCard } from '../../components/PresCard/PresCard';



export const PresContainer = (props) =>  {
  const loadingMsg = <h2>Loading...</h2>;
  const errorMsg = <h2>{props.hasErrored}</h2>;
  const filteredPres = props.filter 
    ? props.presidents.filter(pres => pres.party === props.filter)
    : props.presidents
  const presCards = filteredPres.map(pres => <PresCard data={pres} key={pres.number} />)
  return (
    <section className="PresContainer">
      {props.isLoading && loadingMsg}
      {props.hasErrored && errorMsg}
      {presCards}
    </section>
  );
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  filter: state.filter
})

export default connect(mapStateToProps)(PresContainer);