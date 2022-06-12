import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ListItem = ({name, code, value, convert}) => (
  <li className={styles.listItemWrapper}>
    <div className={styles.line}>
      <div className={styles.name}>{name}</div>
      <div className={styles.code}>{code}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.convert}>{convert}</div>
      <div className={styles.remove}>
        <a href="#">
          x{/*<FontAwesomeIcon icon="fas fa-trash" />*/}
        </a>
      </div>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  convert: PropTypes.number.isRequired,
};

export default ListItem;
