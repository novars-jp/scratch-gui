import React from 'react';
import PropTypes from 'prop-types';

import Box from '../box/box.jsx';
import CloseButton from '../close-button/close-button.jsx';
import styles from './mabeee-item.css';

const MaBeeeItem = ({ device, onDeleteButtonClick }) => (
    <Box className={styles.mabeeeItem}>
        <Box className={styles.info}>
            <p className={styles.mabeeeName}>{device.getName()}</p>
            <p className={styles.mabeeePower}>{device.getPwmDuty()}</p>
        </Box>
        <CloseButton
            className={styles.closeButton}
            size={CloseButton.SIZE_LARGE}
            onClick={onDeleteButtonClick} />
    </Box>
);

MaBeeeItem.propTypes = {
    device: PropTypes.object.isRequired,
    onDeleteButtonClick: PropTypes.object.isRequired
}

export default MaBeeeItem;
