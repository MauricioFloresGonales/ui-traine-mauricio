import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED} from '../actions/country';
import {FETCH_CARS_REQUESTED, FETCH_CAR_REQUESTED, SUBMIT_CAR_REQUESTED,DELETE_CAR_REQUESTED} from '../actions/car';
import {FETCH_INSTRUMENTS_REQUESTED} from '../actions/instrument';
import {FETCH_EMPLOYEES_REQUESTED} from '../actions/employe';

import {fetchCountries} from './country';
import {fetchCars, getCar, saveCar, deleteCar} from './car';
import {fetchInstruments} from './instrument';
import {fetchEmployees} from './employe';

export default function* root() {
    return yield all([
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(FETCH_INSTRUMENTS_REQUESTED, fetchInstruments),
        takeEvery(FETCH_EMPLOYEES_REQUESTED, fetchEmployees),
        takeEvery(FETCH_CAR_REQUESTED, getCar),
        takeEvery(SUBMIT_CAR_REQUESTED, saveCar),
        takeEvery(DELETE_CAR_REQUESTED, deleteCar)
    ])
}
