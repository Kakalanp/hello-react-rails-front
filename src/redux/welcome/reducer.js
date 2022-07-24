const GETGREETING_BEGIN = 'GETGREETINGBEGIN';
const GETGREETING_SUCCESS = 'GETGREETINGSUCCESS';
const GETGREETING_FAILURE = 'GETGREETINGFAILURE';
const BASE_URL = 'http://127.0.0.1:3100/show';

const INITIAL_STATE = {
  greeting: '',
  fetching: true,
};

function getGreetingBegin() {
  return {
    type: GETGREETING_BEGIN,
  };
}

function getGreetingSuccess(greeting) {
  return {
    type: GETGREETING_SUCCESS,
    payload: greeting,
  };
}

function getGreetingFailure() {
  return {
    type: GETGREETING_FAILURE,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GETGREETING_SUCCESS:
      return {
        greeting: action.payload,
        fetching: false,
      };
    case GETGREETING_BEGIN:
      return {
        ...state,
        fetching: true,
      };
    case GETGREETING_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default: return state;
  }
}

export function getGreeting() {
  return (dispatch) => {
    const url = `${BASE_URL}`;
    dispatch(getGreetingBegin());
    fetch(url).then((response) => {
      response.json().then((json) => {
        const { greeting } = json;
        dispatch(getGreetingSuccess(greeting));
      }).catch(() => dispatch(getGreetingFailure()));
    });
  };
}
