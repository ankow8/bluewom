import React from 'react';
import styles from './ClearItems.module.scss';

class ClearItems extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <a href="#">- wyczyść tablicę</a>
      </div>
    );
  }
}

export default ClearItems;
