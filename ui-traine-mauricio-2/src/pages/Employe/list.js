import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Container,
    Button,
    Row,
    Col,
    Spinner
} from 'reactstrap';

import {
    fetchEmployeesRequested,
    sortEmploye
} from '../../actions/employe'

class App extends PureComponent {
    componentDidMount() {
        this.props.getEmployees();
    }

    handlePagination = (skip) => {
        this.props.getEmployees({skip});
    } 

    render() {
        const {
            employees,
            limit,
            total,
            tableProps,
            onSort,
            loading
        } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Tabla de datos </h3>
                    </Col>
                    <Col sm="3">
                        <Button color="primary" tag={Link} to="/employe/edit/new"> Nuevo </Button>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        {loading && (
                            <Spinner color="danger" />
                        )}
                        {!loading && (
                            <Table {...{
                                data: employees,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination
                            }}/>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {employees, limit, total, loading}, tableProps} = state.employe;
    return {
        tableProps,
        employees,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getEmployees: filters => dispatch(fetchEmployeesRequested(filters)),
    onSort: sort => dispatch(sortEmploye(sort))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);