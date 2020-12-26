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
    tags: [] as string[],
    note: '',
    type: '-' as ('-' | '+'),
    amount: 0
  });
  return (
    <WrapperLayout>
      <TagSection value={selected.tags}
                  onChanged={(tags) => setSelected({
                    ...selected,
                    tags
                  })}/>
      <NoteSection value={selected.note}
                   onChanged={(note) => setSelected({
                     ...selected,
                     note
                   })}/>
      <TypeSection value={selected.type}
                   onChanged={(type)=>setSelected({
                     ...selected,
                     type
                   })}/>
      <NumberPadSection value={selected.amount}
                        onChanged={(amount) => setSelected({
                          ...selected,
                          amount
                        })}/>
    </WrapperLayout>
  );
}

export default Money;