import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ListItem = (props) => (
  <li className="listItemWrapper">
    <div className="list-line">
      <div className="line name">{props.name}</div>
      <div className="line code">{props.code}</div>
      <div className="line value">{props.value}</div>
      <div className="line convert">{props.convert}</div>
      <div className="line remove">
        <a href="#">
          x<FontAwesomeIcon icon="fas fa-trash" />
        </a>
      </div>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  value: PropTypes.number,
  convert: PropTypes.number,
};

export default ListItem;
