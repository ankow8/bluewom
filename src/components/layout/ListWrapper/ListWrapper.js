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
    />
    <ListItem
      name={data[0].name}
      code={data[0].code}
      value={data[0].value}
    />
    <ListItem
      name={data[1].name}
      code={data[1].code}
      value={data[1].value}
    />
    <ListItem
      name={data[2].name}
      code={data[2].code}
      value={data[2].value}
    />
    <ListItem
      name={data[3].name}
      code={data[3].code}
      value={data[3].value}
    />
    <ListItem
      name={data[4].name}
      code={data[4].code}
      value={data[4].value}
    />
    <ListItem
      name={data[5].name}
      code={data[5].code}
      value={data[5].value}
    />
  </ul>
);

export default ListWrapper;
