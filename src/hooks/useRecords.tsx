import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type newRecordItem = {
  tagIds: number[];
  note: string;
  type: '+' | '-';
  amount: number;
}

export type RecordItem = newRecordItem & {
  createAt: string
}
const     useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);
  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      window.alert('请输入金额');
      return false;
    }
    const record = {...newRecord, createAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    return true;
  };

  return {records, addRecord};
};

export {useRecords};