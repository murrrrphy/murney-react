import styled from 'styled-components';
import React, {useState} from 'react';

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
  value: string[];
  onChanged: (selected: string[]) => void
}
const TagSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const selectedTags = props.value;
  const onAddTag = () => {
    const newTag = window.prompt('新标签的名称为');
    if (newTag === null) {
      return;
    } else if (newTag === '') {
      window.alert('标签名不能为空');
    } else {
      setTags([...tags, newTag]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChanged(selectedTags.filter(t => t !== tag));
    } else {
      props.onChanged([...selectedTags, tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
              onClick={() => onToggleTag(tag)}
              key={tag}>
            {tag}
          </li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagSection};