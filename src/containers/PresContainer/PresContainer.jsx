import React from 'react';
import { connect } from 'react-redux';
import { PresCard } from '../../components/PresCard/PresCard';



export const PresContainer = (props) =>  {
  const loadingMsg = <h2>Loading...</h2>
  const errorMsg = <h2>{props.hasErrored}</h2>
  const presCards = props.isLoading 
    ? null
    : props.presidents.map(pres => <PresCard data={pres} key={pres.number} />)
  return (
    <section>
      {props.isLoading && loadingMsg}
      {props.hasErrored && errorMsg}
      {presCards}
    </section>
  );
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
})

export default connect(mapStateToProps)(PresContainer);