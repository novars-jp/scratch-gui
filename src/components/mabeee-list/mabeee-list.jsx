import React from 'react';
import PropTypes from 'prop-types';

import Box from '../box/box.jsx';
import MaBeeeItem from '../mabeee-item/mabeee-item.jsx';
import ActionMenu from '../action-menu/action-menu.jsx';
import styles from './mabeee-list.css';
import mabeeeIcon from './mabeeeIcon.svg';

const MaBeeeList = ({ devices, onAddClick, onDeleteClick }) => (
    <Box className={styles.mabeeeList}>
        <div className={styles.header}>
            <div className={styles.headerTitle}>MaBeee</div>
        </div>
        <Box className={styles.scrollWrapper}>
            <Box className={styles.deviceList}>
                {devices.map(device => (
                    <MaBeeeItem
                        key={device.getId()}
                        device={device}
                        onDeleteClick={onDeleteClick}/>
                ))}
            </Box>
        </Box>
        <ActionMenu className={styles.addButton}
            img={mabeeeIcon}
            onClick={onAddClick}
            title="Coonnect MaBeee"
        />
    </Box>
);

MaBeeeList.propTypes = {
    devices: PropTypes.array.isRequired,
    onAddClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}

export default MaBeeeList;
