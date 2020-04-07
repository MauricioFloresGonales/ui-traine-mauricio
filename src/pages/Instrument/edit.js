import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchInstrumentsRequested
} from '../../actions/instrument'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [instruments] = useSelector(state => state.instrument.documents.instruments);
    if (props.match.params.id) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchInstrumentsRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            {JSON.stringify(instruments)}
        </div>
    )
};


export default Edit;