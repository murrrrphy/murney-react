import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

type Params = {
  id: string;
}
const EditTag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      <InputWrapper>
        <Input type="text"
               label="标签名"
               placeholder="请输入标签名"
               value={tag.name}/>
      </InputWrapper>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {EditTag};