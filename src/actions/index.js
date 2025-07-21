import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SET_FILTER,
  LOAD_MORE
} from './types';

export const login = (email) => ({
  type: LOGIN,
  payload: email
});

export const logout = () => ({
  type: LOGOUT
});

// Countries Actions
export const fetchCountries = () => async (dispatch) => {
  dispatch({ type: FETCH_COUNTRIES_REQUEST });
  try {
    const res = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
    const sorted = res.data.sort((a, b) => a.name.localeCompare(b.name)); // FIXED HERE
    dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: sorted });
  } catch (error) {
    dispatch({ type: FETCH_COUNTRIES_FAILURE });
  }
};

export const setFilter = (region) => ({
  type: SET_FILTER,
  payload: region
});

export const loadMore = () => ({
  type: LOAD_MORE
});