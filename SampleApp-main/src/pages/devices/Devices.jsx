import React from 'react';
import styled from 'styled-components';
import Menubar from './Menubar';
import AllDevices from './AllDevices';
import Breadcrum from '../common/Breadcrum';

const DeviceStyles = styled.div`

.main {
    display: flex;
    font-size: 14px;   
}

.lbldevice{
    font-size:26px;
    font-weight:700;
    padding-left: 14px;
}
`;

const Devices = () => {
    return (
        
        <DeviceStyles>
            <Breadcrum/>
             <label className='lbldevice'>Devices</label>
            <div className='main'> 
                <Menubar />
                </div>
                <div>
                <AllDevices />
            </div>
        </DeviceStyles>
    )
}

export default Devices;