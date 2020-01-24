import React from 'react'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { attention, tech, message, id, date } = log;
  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: 'Log Deleted' });
  }
  return (
    <li className="collection-item">
      <div>
        <a 
          href="#edit-log-modal" 
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
          onClick={() => setCurrent(log)}
        >{message}</a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span>{' '}
          last updated by {' '}
          <span className="black-text">{tech}</span>
          {' '} on <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li >
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    deleteLog: (id) => dispatch(deleteLog(id)),
    setCurrent: (current) => dispatch(setCurrent(current))
  }
}

export default connect(null, mapDispatchToProps)(LogItem);
