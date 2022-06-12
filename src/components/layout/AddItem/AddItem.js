import React from 'react';
import styles from './AddItem.module.scss';
import PropTypes from 'prop-types';
import { initialState } from '../../../data';

const AddItem = ({submitFn}) => (
  <div className={styles.component}>
    <form autoComplete="off" onSubmit={submitFn}>
      <input className={styles.name} type="text" placeholder="nazwa waluty" name="name" list="name_list" required/>
      <datalist id="name_list">
        {initialState.map(
          ({name}) => <option key={name} value={name}/>
        )}
      </datalist>
      <input className={styles.code} type="text" placeholder="kod" name="code" list="code_list" />
      <datalist id="code_list">
        {initialState.map(
          ({code}) => <option key={code} value={code}/>
        )}
      </datalist>
      <input className={styles.value} placeholder="wartość" name="value" />
      <input className={styles.convert} placeholder="przelicznik" name="convert" />
      <div className={styles.button}>
        <button type="submit">+ dodaj walutę</button>
      </div>
    </form>
  </div>
);

AddItem.propTypes = {
  submitFn: PropTypes.func,
};

export default AddItem;
