import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MaBeeeApp from 'mabeee';

import { setDevices } from '../reducers/mabeee';
import MaBeeeListComponent from '../components/mabeee-list/mabeee-list.jsx';

class MaBeeeList extends React.Component {
    constructor(props) {
        super(props);
        this._timerId = null;
    }
    componentDidMount() {
        this._timerId = setInterval(() => {
            this.props.setDevices(MaBeeeApp.getDevices());
            this.forceUpdate();
        }, 100);
    }
    componentWillUnmount() {
        clearInterval(this._timerId);
        this._timerId = null;
        MaBeeeApp.finalize();
    }
    handleAdd() {
        MaBeeeApp.connect();
    }
    handleDelete(device) {
        device.disconnect();
    }
    render() {
        return(
            <MaBeeeListComponent
                devices={this.props.devices}
                onDeleteClick={this.handleDelete}
                onAddClick={this.handleAdd}
            />
        );
    }
}

MaBeeeList.PropTypes = {
    devices: PropTypes.array,
    setDevices: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    devices: state.mabeee.devices
});
const mapDispatchToProps = dispatch => ({
    setDevices: (devices) => dispatch(setDevices(devices))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MaBeeeList);
