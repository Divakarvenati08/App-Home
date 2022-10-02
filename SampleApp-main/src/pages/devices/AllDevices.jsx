import React, { useState, useEffect } from "react";
import AllDevicesStyle from "./SeviceStyles";
import Dropdown from "react-bootstrap/Dropdown";
// import Tables from '../common/Tables';
// import useAxios from '../../hooks/useAxios';

import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { Badge } from "react-bootstrap";
import axios from "axios";

const AllDevices = () => {
  const SampleOnlineData = [
    {
      DeviceName: "Famili-room",
      ParentalControl: "AR",
      Connection: "Coax",
      Block: "true",
    },
    {
      DeviceName: "NND201WRK12",
      ParentalControl: "None",
      Connection: "Ethernet",
      Block: "true",
    },
  ];

  const SampleOfflineData = [
    {
      DeviceName: "CDQWER3455",
      ParentalControl: "SR",
      Connection: "Offline",
      Block: "true",
    },
    {
      DeviceName: "QWERT1234",
      ParentalControl: "AR",
      Connection: "Offline",
      Block: "true",
    },
    {
      DeviceName: "ASDFFG6778",
      ParentalControl: "None",
      Connection: "Offline",
      Block: "true",
    },
    {
      DeviceName: "NND201WRK12",
      ParentalControl: "ST",
      Connection: "Ethernet",
      Block: "true",
    },
  ];

  const [onlineData, setOnlineData] = useState([{}]);
  const [offlineData, setOfflineData] = useState([{}]);

  useEffect(() => {
    const fetchOnlineData = async () => {
      const data = await axios("https://jsonplaceholder.typicode.com/posts");
      //setOnlineData(data);
      setOnlineData(SampleOnlineData);
      setOfflineData(SampleOfflineData);
    };
    fetchOnlineData();
  }, [setOnlineData, setOfflineData]);

  // const { response, loading, error } = useAxios({
  //   method: "GET",
  //   url: "/posts",
  //   headers: {
  //     accept: "*/*",
  //   },
  // });
  // console.log(response, "Res");

  // useEffect(() => {
  //   if (response.length) {
  //     const onlineData = response.filter((res) => res.type === "ONLINE");
  //     const offlineData = response.filter((res) => res.type === "OFFLINE");
  //     setOnlineData(onlineData);
  //     setOfflineData(offlineData);
  //   }
  // }, [response]);

  return (
    <AllDevicesStyle>
      <div className="mainDiv">
        <div className="devdrpdown ddlbtn">
          <div className="">
            <Dropdown className="">
              <Dropdown.Toggle variant="default">Show A to Z</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Show A to Z</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="">
            <Dropdown>
              <Dropdown.Toggle variant="default">Show All</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Show All</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="">
            <Dropdown>
              <Dropdown.Toggle variant="default">Compact List</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Compact List</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 contentSize">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <table className="table table-condensed table-striped">
                      <thead>
                        <tr>
                          <th>Device Name</th>
                          <th>Parental Control</th>
                          <th>Connection</th>
                          <th>Block/Allow</th>
                          <th></th>
                        </tr>
                        <tr>
                          <th colSpan="5">Online</th>
                        </tr>
                      </thead>
                      <tbody>
                        {onlineData &&
                          onlineData.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <span>
                                    <FaIcons.FaLaptop />
                                    <RiIcons.RiArrowRightSFill />
                                  </span>
                                  {item.DeviceName}
                                </td>
                                <td>
                                  <span>
                                    {item.ParentalControl !== "None" ? (
                                      <Badge pill bg="primary">
                                        {" "}
                                        {item.ParentalControl}{" "}
                                      </Badge>
                                    ) : (
                                      "None"
                                    )}
                                  </span>
                                </td>
                                <td>
                                  {" "}
                                  {item.Connection !== "Offline" ? (
                                    ""
                                  ) : (
                                    <span>
                                      <FaIcons.FaMicrophoneSlash />
                                    </span>
                                  )}{" "}
                                  &nbsp;
                                  {item.Connection}
                                </td>

                                <td>
                                  <label className="switch">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </td>
                                <td>
                                  {item.tblTitle === "Offline" && (
                                    <span>
                                      <FaIcons.FaTrashAlt />
                                    </span>
                                  )}{" "}
                                  &nbsp;
                                  <span>
                                    <FaIcons.FaCog />
                                    <RiIcons.RiArrowRightSFill />
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                      <thead>
                        <tr>
                          <th colSpan="5">Offline</th>
                        </tr>
                      </thead>
                      <tbody>
                        {offlineData &&
                          offlineData.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <span>
                                    <FaIcons.FaLaptop />
                                    <RiIcons.RiArrowRightSFill />
                                  </span>
                                  {item.DeviceName}
                                </td>
                                <td>
                                  <span>
                                    {item.ParentalControl !== "None" ? (
                                      <Badge pill bg="primary">
                                        {" "}
                                        {item.ParentalControl}{" "}
                                      </Badge>
                                    ) : (
                                      "None"
                                    )}
                                  </span>
                                </td>
                                <td>
                                  {" "}
                                  {item.Connection !== "Offline" ? (
                                    ""
                                  ) : (
                                    <span>
                                      <FaIcons.FaMicrophoneSlash />
                                    </span>
                                  )}{" "}
                                  &nbsp;
                                  {item.Connection}
                                </td>

                                <td>
                                  <label className="switch">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </td>
                                <td>
                                  <span>
                                    <FaIcons.FaTrashAlt />
                                  </span>{" "}
                                  &nbsp;
                                  <span>
                                    <FaIcons.FaCog />
                                    <RiIcons.RiArrowRightSFill />
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='container'>
            <div className='row'>
             {/* <Tables tableList={onlineData} tblTitle="Online" tblHeader={true} /> 
              <Tables tableList={offlineData} tblTitle="Offline" tblHeader={true} />
            </div>
          </div> */}
        </div>
      </div>
    </AllDevicesStyle>
  );
};

export default AllDevices;
