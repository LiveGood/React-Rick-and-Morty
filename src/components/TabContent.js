import { theme } from 'constants';
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
  background: ${({ theme, isActive }) => 
    isActive ?
    theme.colors.tabContent.activeBackground :
    theme.colors.tabContent.background
  };
  color: ${({ theme, isActive }) => 
    isActive ?
    theme.colors.tabContent.activeColor :
    theme.colors.tabContent.color
  };
  cursor: ${({ isActive }) => isActive ? 'default' : 'pointer'};


  svg {
    display: block;
    margin: 0 auto;
    fill: ${({ theme, isActive }) => 
      isActive ?
      theme.colors.tabContent.activeColor :
      theme.colors.tabContent.color
    }
  };

  ${({ theme }) => css`
    @media ${theme.mediaQueries.smUp} {
      padding: 20px 15px;
      font-size: 15px;
      
      svg {
        width: 24px;
        height: 24px;
        margin-bottom: 12px;
      }
    }

    @media ${theme.mediaQueries.xsOnly} {
      padding: 10px 5px;
      font-size: 11px;
      
      svg {
        width: 18px;
        height: 18px;
        margin-bottom: 5px;
      }
    }
  `};
  
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
