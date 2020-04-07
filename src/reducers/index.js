import {combineReducers} from 'redux';

import country from './country';
import car from './car';
import instrument from './instrument';
import employe from './employe';

export default combineReducers({
    country,
    car,
    instrument,
    employe
})