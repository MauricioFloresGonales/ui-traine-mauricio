import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchEmployeesRequested
} from '../../actions/employe'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [employees] = useSelector(state => state.employe.documents.employees);
    if (props.match.params.id) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchEmployeesRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            {JSON.stringify(employees)}
        </div>
    )
};


export default Edit;