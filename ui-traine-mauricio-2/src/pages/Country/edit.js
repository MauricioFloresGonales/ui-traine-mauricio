import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchCountriesRequested
} from '../../actions/country';

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
        control: 'name',
        label: 'Nombre',
        path: 'name',
        value: null,
        type: 'text'
    },
    {
        control: 'code',
        label: 'Código',
        path: 'code',
        value: null,
        type: 'text'
    },
    {
        control: 'iso2',
        label: 'ISO2',
        path: 'iso2',
        value: null,
        type: 'text'
    }
];

const Edit = (props) => {

    console.log(props);
    const dispatch = useDispatch();
    const [countries] = useSelector(state => state.country.documents.countries);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchCountriesRequested(props.match.params)), [
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
                            value={get(countries, field.path)}
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