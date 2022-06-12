import React from 'react';
import Header from './components/layout/Header/Header';
import ListWrapper from './components/layout/ListWrapper/ListWrapper';
import AddItem from './components/layout/AddItem/AddItem';
import ClearItems from './components/layout/ClearItems/ClearItems';
import { initialState } from './data';

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

    {/*
    const url = 'http://api.nbp.pl/api/exchangerates/tables/a';
    fetch(url)
      .then(rawResponse => rawResponse.json())
      .then(parsedResponse => {
        this.webState = parsedResponse[0].rates;
        console.log(this.webState);
      });
      */}

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
