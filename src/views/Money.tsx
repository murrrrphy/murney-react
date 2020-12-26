import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagSection} from './money/TagSection';
import {NoteSection} from './money/NoteSection';
import {NumberPadSection} from './money/NumberPadSection';
import {TypeSection} from './money/TypeSection';

const WrapperLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

function Money() {
  return (
    <WrapperLayout>
      <TagSection />
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请输入备注"/>
        </label>
      </NoteSection>
      <TypeSection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </TypeSection>
      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </WrapperLayout>
  );
}

export default Money;