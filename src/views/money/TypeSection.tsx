import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const TypeSection: React.FC = () => {
  const typeMap = {'-': '支出', '+': '收入'};
  const [typeList] = useState<(keyof typeof typeMap)[]>(['-','+'])
  const [type, setType] = useState('-');

  return (
    <Wrapper>
      <ul>
        {typeList.map(c =>
          <li onClick={()=>setType(c)} className={type === c ? 'selected' : ''}>
            {typeMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export {TypeSection};