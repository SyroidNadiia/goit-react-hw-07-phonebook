import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64635bce7a9eead6fae46361.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name, phone}, thunkAPi) => {
    try {
      const response = await axios.post('contacts', { name, phone });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error.message);
    }
  }
);
