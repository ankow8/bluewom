import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.scss';
import { headTable, data } from '../../../data';

const ListWrapper = () => (
  <ul className="listWrapper">
    <ListItem
      name={headTable[0].name}
      code={headTable[0].code}
      value={headTable[0].value}
      convert={headTable[0].convert}
    />
    {data.map((item) => (
      <ListItem
        name={item.name}
        code={item.code}
        value={item.value}
        convert={item.convert}
      />
    ))}
  </ul>
);

export default ListWrapper;
