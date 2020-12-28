import Layout from '../components/Layout';
import React, {useState} from 'react';
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
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    type: '-' as ('-' | '+'),
    amount: 0
  });

  const onChanged = (value: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...value
    });
  };
  return (
    <WrapperLayout>
      <TagSection value={selected.tagIds}
                  onChanged={(tagIds) => onChanged({tagIds})}/>
      <NoteSection value={selected.note}
                   onChanged={(note) => onChanged({note})}/>
      <TypeSection value={selected.type}
                   onChanged={(type) => onChanged({type})}/>
      <NumberPadSection value={selected.amount}
                        onChanged={(amount) => onChanged({amount})}/>
    </WrapperLayout>
  );
}

export default Money;