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
    {data.map(({name, code, value, convert}) => (
      <ListItem
        name={name}
        code={code}
        value={value}
        convert={convert}
      />
    ))}
  </ul>
);

export default ListWrapper;
