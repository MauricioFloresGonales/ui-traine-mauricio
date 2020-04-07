import {
    FETCH_EMPLOYEES_SUCCEEDED,
    FETCH_EMPLOYEES_REQUESTED,
    SORT_EMPLOYE
} from '../../actions/employe';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    employees: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EMPLOYEES_REQUESTED:
            return {...state, loading: true};
        case FETCH_EMPLOYEES_SUCCEEDED:
            const {employees, limit, total} = action;
            return {...state, loading: false, employees, limit, total};
        case SORT_EMPLOYE:
            return {
                ...state,
                loading: false,
                employees: orderBy(state.employees,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        default:
            return state;
    }
}