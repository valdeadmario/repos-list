import React, { useState } from 'react';
import { Provider } from 'react-redux';

import RepositoriesList from 'containers/RepositoriesList';

import SearchInput from 'components/SearchInput';

import store from 'store';

const SearchPage = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Provider store={store}>
      <SearchInput value={input} handleChange={handleChange} />
      <RepositoriesList inputText={input} />
    </Provider>
  );
};

export default SearchPage;
