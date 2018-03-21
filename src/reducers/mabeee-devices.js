const UPDATE_DEVICES = 'scratch-gui/monitors/UPDATE_DEVICES';
import { OrderedMap } from 'immutable';

const initialState = OrderedMap();

const reducer = function(state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case UPDATE_DEVICES:
        return action.devices;
    default:
        return state;
    }
};

const updateDevices = function(devices) {
    return {
        type: UPDATE_DEVICES,
        devices: devices,
        meta: {
            throttle: 30
        }
    };
};

export {
    reducer as default,
    updateDevices
};
