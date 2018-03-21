import React from 'react';
import PropTypes from 'prop-types';
import MaBeeeApp from '../lib/mabeee';

import MaBeeeListComponent from '../components/mabeee-list/mabeee-list.jsx';

class MaBeeeList extends React.Component {
    constructor(props) {
        super(props);
        this._timerId = null;
        this.state = { devices: [] };
    }
    componentDidMount() {
        this._timerId = setInterval(() => {
            this.setState({ devices: MaBeeeApp.getDevices() });
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
                devices={this.state.devices}
                onDeleteClick={this.handleDelete}
                onAddClick={this.handleAdd}
            />
        );
    }
}

export default MaBeeeList;
