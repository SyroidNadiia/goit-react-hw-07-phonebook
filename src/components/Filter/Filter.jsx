import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import sharedStyles from 'components/sharedStyles.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handelInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={sharedStyles.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={handelInputChange}
        className={sharedStyles.input}
      ></input>
    </label>
  );
};

export default Filter;
