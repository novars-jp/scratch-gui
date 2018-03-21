import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MaBeeeApp from 'mabeee';

import { updateDevices } from '../reducers/mabeee-devices';
import MaBeeeListComponent from '../components/mabeee-list/mabeee-list.jsx';

class MaBeeeList extends React.Component {
    constructor(props) {
        super(props);
        this._timerId = null;
    }
    componentDidMount() {
        this._timerId = setInterval(() => {
            this.props.updateDevices(MaBeeeApp.getDevices());
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
    devices: state.mabeeeDevices
});
const mapDispatchToProps = dispatch => ({
    updateDevices: (devices) => dispatch(updateDevices(devices))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MaBeeeList);
