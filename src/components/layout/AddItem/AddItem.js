import React from 'react';
import styles from './AddItem.module.scss';
import PropTypes from 'prop-types';

const AddItem = ({submitFn}) => (
  <div className={styles.component}>
    <form autoComplete="off" onSubmit={submitFn}>
      <input className={styles.name} type="text" placeholder="nazwa waluty" name="name" list="name_list" required/>
      <datalist id="name_list">
        <option value="euro">euro</option>
        <option value="dolar amerykański">dolar amerykański</option>
        <option value="frank szwajcarski">frank szwajcarski</option>
        <option value="hrywna">hrywna</option>
        <option value="funt szterling">funt szterling</option>
        <option value="jen japoński">jen japoński</option>
      </datalist>
      <input placeholder="przelicznik" name="convert" />
      <input className={styles.code} type="text" placeholder="kod" name="code" list="code_list" />
      <datalist id="code_list">
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
        <option value="UAH">UAH</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </datalist>
      <input placeholder="wartość waluty" name="value" />
      <button type="submit">+ dodaj walutę</button>
    </form>
  </div>
);

AddItem.propTypes = {
  submitFn: PropTypes.func,
};

export default AddItem;
