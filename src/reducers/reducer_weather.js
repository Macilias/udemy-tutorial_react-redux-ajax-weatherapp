import { FETCH_WEATHER } from "../actions";

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// super important, concat returns a new copy with the element added!
			// this way we do not manipulate the state and are conform with react & redux
			// return state.concat([ action.payload.data ]);
			// alternatively (ES6 Syntax) creates also a new one and adds elements to it
			// the only difference is, this one inserts state at the front of the array.
			return [ action.payload.data, ...state ]
	}
	return state;
}
