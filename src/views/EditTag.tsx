import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useTags} from 'hooks/useTags';
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
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  }
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input type="text"
               label="标签名"
               placeholder="请输入标签名"
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}/>
      </InputWrapper>
      <Center>
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </Center>
    </div>
  );
  return (
    <Layout>
      <TopBar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      {tag ? tagContent(tag) : <Center>tag不存在</Center>}
    </Layout>
  );
};

export {EditTag};