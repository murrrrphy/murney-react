import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon';

const NavWrapper = styled.nav`
  background: #FFF;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  > ul {
    display: flex;
    > li {
    width: 33.33333%;
      > a {
        text-align: center;
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: #fb8500;
          .icon {
            fill: #fb8500;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink activeClassName="selected" to="/tags">
            <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/money">
            <Icon name="add"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/statistics">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;