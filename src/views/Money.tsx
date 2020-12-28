import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagSection} from './money/TagSection';
import {NoteSection} from './money/NoteSection';
import {NumberPadSection} from './money/NumberPadSection';
import {TypeSection} from './money/TypeSection';
import {useRecords} from '../hooks/useRecords';

const WrapperLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  type: '-' as ('-' | '+'),
  amount: 0
};

function Money() {
  const {addRecord} = useRecords();
  const [selected, setSelected] = useState(defaultFormData);
  const onChanged = (value: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...value
    });
  };
  const submit = () => {
    addRecord(selected);
    window.alert('保存成功');
    setSelected(defaultFormData);
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
                        onChanged={(amount) => onChanged({amount})}
                        onOK={submit}/>
    </WrapperLayout>
  );
}

export default Money;