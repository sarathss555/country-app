import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SET_FILTER,
  LOAD_MORE
} from '../actions/types';

const initialState = {
  countries: [],
  filtered: [],
  status: 'idle',
  region: 'All',
  visible: 8
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return { ...state, status: 'loading' };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        countries: action.payload,
        filtered: action.payload
      };
    case FETCH_COUNTRIES_FAILURE:
      return { ...state, status: 'failed' };
    case SET_FILTER:
      const region = action.payload;
      return {
        ...state,
        region,
        filtered: region === 'All' ? state.countries : state.countries.filter(c => c.region === region),
        visible: 8
      };
    case LOAD_MORE:
      return {
        ...state,
        visible: state.visible + 8
      };
    default:
      return state;
  }
};

export default countriesReducer;