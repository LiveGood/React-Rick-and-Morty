import React, { useState } from 'react';
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

const Tab = styled.li`
  line-height: 1;
  flex: 1; // todo
  text-align: center;
  text-transform: uppercase;

`;

function TabContent({ items }) {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  return (
    <TabContentWrapper>
      <TabNav>
        {items.map(({ id, label, icon: Icon, }, index) => {
          return <Tab
            key={`tab-content-nav-item-${id}${index}`}
            isActive={activeTab === id}
            onClick={() => setActiveTab(id)}
          >
            {Icon && (<Icon />)}
            <span>{label}</span>
          </Tab>
        })}
      </TabNav>
    </TabContentWrapper>
  )
}

export default TabContent
