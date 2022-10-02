import React from "react";

import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import { Badge } from 'react-bootstrap';
import CommonStyles from "./CommonStyles";


const Tables = (props) => {
  return (
    <>
      <CommonStyles>
        <div className="col-md-12 contentSize">
          <div className="panel panel-default">
            <div className="panel-body">
              <table className="table table-condensed table-striped">
                <thead>
                  {props.tblHeader &&
                    <tr>
                      <th>Device Name</th>
                      <th>Parental Control</th>
                      <th>Connection</th>
                      <th>Block/Allow</th>
                      <th></th>
                    </tr>}
                  <tr><th colSpan="5"> {props.tblTitle}</th></tr>
                </thead>
                <tbody>
                  {props.tableList && props.tableList.map((item, index) => {
                    return <tr key={index}>
                      <td>
                        <span><FaIcons.FaLaptop /><RiIcons.RiArrowRightSFill /></span>{item.DeviceName}</td>
                      <td>
                        <span>
                          {item.ParentalControl !== 'None' ?
                            <Badge pill bg="primary"> {item.ParentalControl} </Badge>
                            : 'None'}
                        </span></td>
                      <td> {item.Connection !== 'Offline' ? "" :
                        <span><FaIcons.FaMicrophoneSlash /></span>} &nbsp;
                        {item.Connection}</td>

                      <td>
                        <label className="switch">
                          <input type="checkbox" checked />
                          <span className="slider round"></span>
                        </label>
                      </td>
                      <td>
                        {props.tblTitle === 'Offline' &&
                          <span><FaIcons.FaTrashAlt /></span>} &nbsp;
                        <span><FaIcons.FaCog /><RiIcons.RiArrowRightSFill /></span>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CommonStyles>
    </>
  )
}

export default Tables;