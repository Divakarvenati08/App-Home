import styled from 'styled-components';

const AllDevicesStyle = styled.div`
.devdrpdown {  
  display: flex;
  justify-content: space-between;
}
.deviceddl{
   flex-basis:40%
}
.ddlbtn{
  padding:10px;
}
.mainDiv{
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
}

.switch {
  position: relative;
  display: inline-block;
  width: 43px;
  height: 21px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 50%;
}

`;

export default AllDevicesStyle;