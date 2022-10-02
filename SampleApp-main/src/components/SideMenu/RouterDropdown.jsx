import React,{useState} from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import styled from 'styled-components';

const SideMenuDropdown = styled.div`
.drpdown {  
  background: #FFFFFF;
  width: 250px; 
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: 350ms;
  z-index: 10;  
  margin-bottom:3px;  
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); 
}
.ddlContent {
  width: 225px; 
  font-size: 14px;
}
`;

const RouterDropdown = () => {
  const [value, setValue] = useState("");

  const handleChange = e => setValue(e.target.value);

  return (
    <SideMenuDropdown>
      <div className='drpdown'>     
      <FormControl className="ddlContent">
      {/* <span>Network Device</span> */}
        <InputLabel>Fios Router</InputLabel>
        <Select onChange={handleChange}>
          <MenuItem value={1}>Fios Router</MenuItem>
          <MenuItem value={2}>Devices</MenuItem>
          <MenuItem value={3}>Status</MenuItem>
        </Select>
      </FormControl>
      </div>
    </SideMenuDropdown>
  );

}

export default RouterDropdown;
