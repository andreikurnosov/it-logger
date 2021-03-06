import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      addTech({ firstName, lastName });

      M.toast({ html: `${firstName} ${lastName} was added as a tech`});

    }
    setfirstName('');
    setlastName('');
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="firstName" value={firstName} onChange={e => setfirstName(e.target.value)} />
            <label htmlFor="firstName" className="active">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input type="text" name="lastName" value={lastName} onChange={e => setlastName(e.target.value)} />
            <label htmlFor="lastName" className="active">Last Name</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light blue btn">Enter</a>
      </div>
    </div>
  )
}

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTech: (tech) => dispatch(addTech(tech))
  }
}

export default connect(null, mapDispatchToProps)(AddTechModal);
