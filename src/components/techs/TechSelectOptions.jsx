import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types'

const TechSelectOptions = ({ getTechs, tech: {techs, loading} }) => {
  useEffect(() => {
    getTechs();
    // es-lint-disable-next-line
  }, []);

  return (
    !loading && techs !== null && techs.map(t =>
    <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
      {t.firstName} {t.lastName}
    </option>)
  )
}

const mapStateToProps = state => ({
  tech: state.tech
});

const mapDispatchToProps = dispatch => {
  return {
    getTechs: () => dispatch(getTechs())
  }
}

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TechSelectOptions)
