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
      <NoteSection />
      <TypeSection />
      <NumberPadSection />
    </WrapperLayout>
  );
}

export default Money;