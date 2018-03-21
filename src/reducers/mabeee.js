const SET_DEVICES = 'scratch-gui/mabeee/SET_DEVICES';

const initialState = {
    devices: [],
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_DEVICES:
        return Object.assign({}, state, {
            devices: action.devices
        });
    default:
        return state;
    }
};

const setDevices = function (devices) {
    return {
        type: SET_DEVICES,
        devices: devices
    };
};

export {
    reducer as default,
    setDevices
};
