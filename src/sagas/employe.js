import {
    call,
    put,
    delay
} from 'redux-saga/effects';

import EmployeAPI from '../Api/employe';
import {
    fetchEmployeesSucceeded
} from '../actions/employe';

export function* fetchEmployees({filter}) {
    try {
        const {employees, limit, total} = yield call(
            EmployeAPI.fetch,
            filter
        );
        //yield delay(1000);
        yield put(
            fetchEmployeesSucceeded(employees, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}