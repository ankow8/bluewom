import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss';
import { headTable } from '../../../data';

const ListWrapper = (props) => (
  <ul className={styles.listWrapper}>
    <ListItem
      name={headTable[0].name}
      code={headTable[0].code}
      value={headTable[0].value}
      convert={headTable[0].convert}
    />
    {props.items.map(item => (
      <ListItem key={item.code} {...item} />
    ))}
  </ul>
);

export default ListWrapper;
