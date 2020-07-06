import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
} from "../actions/types";

const initialState = {
  contacts: [],
  contact: {},
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case UPDATE_CONTACT:
      return {
        state,
        contacts: state.contacts.map(
          (contact) =>
            (contact =
              contact.id === action.payload.id ? action.payload : contact)
        ),
      };
    default:
      return state;
  }
};

export default contactReducer;
