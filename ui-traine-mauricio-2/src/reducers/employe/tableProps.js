import find from 'lodash/find';
import {
    SORT_EMPLOYE
} from '../../actions/employe';

const initialState = {
    columns: [
        'name',
        'job',
        'salary',
        'createdAt',
        'actions'
    ],
    headers: [
        {
            id: 'name',
            label: 'Nombre',
            sort: 'desc'
        },
        {
            id: 'job',
            label: 'Trabajo',
            sort: 'desc'
        },
        {
            id: 'salary',
            label: 'Sueldo',
            sort: 'desc'
        },
        {
            id: 'createdAt',
            label: 'Creado',
            sort: 'desc'
        },
        {
            id: 'actions',
            label: 'Acciones'
        }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SORT_EMPLOYE:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}