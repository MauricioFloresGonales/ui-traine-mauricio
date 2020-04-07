export const FETCH_EMPLOYEES_REQUESTED = 'FETCH_EMPLOYEES_REQUESTED'; // Accion | Action
export const FETCH_EMPLOYEES_SUCCEEDED = 'FETCH_EMPLOYEES_SUCCEEDED'; // Accion | Action

export const fetchEmployeesRequested = filter => ({type: FETCH_EMPLOYEES_REQUESTED, filter}) // Disparador o Action Creator
export const fetchEmployeesSucceeded = (employees, limit, total) => ({
    type: FETCH_EMPLOYEES_SUCCEEDED,
    employees, limit, total
}) // Disparador o Action Creator

export const SORT_EMPLOYE = 'SORT_EMPLOYE';
export const sortEmploye = sort => ({type: SORT_EMPLOYE, sort});