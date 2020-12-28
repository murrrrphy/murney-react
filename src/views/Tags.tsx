import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/icon';
import {Button} from '../components/Button';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a{
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > .icon{
        height: 1em;
        width: 1em;
      }
    } 
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

function Tags() {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag}>
              <span className="oneLine">
              {tag.name}
            </span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <ButtonWrapper>
        <Button>新增标签</Button>
      </ButtonWrapper>
    </Layout>
  );
}

export default Tags;