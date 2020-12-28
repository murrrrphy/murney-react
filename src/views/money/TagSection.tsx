import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';

const Wrapper = styled.section`
  background: #FFFFFF; 
  padding: 12px 16px;
  flex-grow: 1; 
  display:flex; 
  flex-direction: column;
  justify-content: flex-end; 
  align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; 
       border-radius: 18px;
       display:inline-block; 
       padding: 3px 18px; 
       font-size: 14px; 
       margin: 8px 12px;
       &.selected {
        background: grey;
        color: white;       
       }
    }
  }
  > button{
    background:none; 
    border: none; 
    padding: 2px 4px;
    border-bottom: 1px solid #333; 
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: number[];
  onChanged: (selected: number[]) => void
}
const TagSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const newTag = window.prompt('新标签的名称为');
    if (newTag === null) {
      return;
    } else if (newTag === '') {
      window.alert('标签名不能为空');
    } else {
      setTags([...tags, {id: Math.random(), name: newTag}]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChanged(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChanged([...selectedTagIds, tagId]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
              onClick={() => onToggleTag(tag.id)}
              key={tag.id}>
            {tag.name}
          </li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagSection};