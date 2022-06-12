import React from 'react';
import Header from './components/layout/Header/Header';
import ListWrapper from './components/layout/ListWrapper/ListWrapper';
import AddItem from './components/layout/AddItem/AddItem';
import ClearItems from './components/layout/ClearItems/ClearItems';

const initialState = [
  {
    name: 'euro',
    convert: 1,
    code: 'EUR',
    value: 4.6030,
  },
  {
    name: 'dolar amerykański',
    convert: 1,
    code: 'USD',
    value: 4.3363,
  },
  {
    name: 'frank szwjacarski',
    convert: 1,
    code: 'CHF',
    value: 4.4292,
  },
  {
    name: 'hrywna',
    convert: 1,
    code: 'UAH',
    value: 0.1467,
  },
  {
    name: 'funt szterling',
    convert: 1,
    code: 'GBP',
    value: 5.4127,
  },
  {
    name: 'jen japoński',
    convert: 100,
    code: 'JPY',
    value: 3.2395,
  },
];

class App extends React.Component {

  state = {
    items: [...initialState],
  };

  addItem = (event) => {
    event.preventDefault();

    const newItem = {
      name: event.target[0].value,
      convert: event.target[1].value,
      code: event.target[2].value,
      value: event.target[3].value,
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }));

    event.target.reset();
  };

  render() {
    return (
      <div>
        <Header />
        <ListWrapper
          items={this.state.items}
        />
        <AddItem submitFn={this.addItem}/>
        <ClearItems />
      </div>
    );
  }
}

export default App;
