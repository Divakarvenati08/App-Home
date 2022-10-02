import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import RouterDropdown from './RouterDropdown';

const SidebarNav = styled.nav`
  background: #FFFFFF;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  margin-top:3rem;
  
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const CommonStyle = styled.div`

`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <CommonStyle>
        <div className=''>
          <RouterDropdown />
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </div>
      </CommonStyle>
    </>
  );
};

export default Sidebar;
