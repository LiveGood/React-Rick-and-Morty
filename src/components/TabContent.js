import React, { useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';

const TabContentWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.materialShadow};
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`; 

const TabNav = styled.ul`
  position: relative;
  list-style: none;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;

function TabContent() {
  return (
    <TabContentWrapper>
      <TabNav>
        
      </TabNav>
    </TabContentWrapper>
  )
}

export default TabContent
