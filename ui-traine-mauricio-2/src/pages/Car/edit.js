import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchCarsRequested
} from '../../actions/car'

import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import map from 'lodash/map';
import get from 'lodash/get';

const fields = [
    {
        control: 'id',
        label: 'id',
        path: 'id',
        value: null,
        type: 'text'
    },
    {
        control: 'brand',
        label: 'Nombre',
        path: 'brand',
        value: null,
        type: 'text'
    },
    {
        control: 'model',
        label: 'Modelo',
        path: 'model',
        value: null,
        type: 'text'
    },
    {
        control: 'year',
        label: 'Año',
        path: 'year',
        value: null,
        type: 'number'
    }
];

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [cars] = useSelector(state => state.car.documents.cars);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchCarsRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <Container fluid>
            
        <Form>
            {map(fields, field => (
                <FormGroup>
                    <Label>
                        {field.label}
                        <br/>
                        <Input
                            key={field.control}
                            name={field.control}
                            {...field}
                            value={get(cars, field.path)}
                        >
                        </Input>
                    </Label>
                </FormGroup>
            ))}
            <Button>
                Submit
            </Button>
        </Form>
        </Container>
    )
};

export default Edit;