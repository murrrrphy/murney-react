import Layout from 'components/Layout';
import React, {ReactNode, useState} from 'react';
import {TypeSection} from './money/TypeSection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const WrapperType = styled.div`
  background: white;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [type, setType] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.type === type);

  selectedRecords.forEach(r => {
    const key = day(r.createAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <WrapperType>
        <TypeSection value={type} onChanged={value => setType(value)}/>
      </WrapperType>
      {array.map(([date, records]) => <div>
        <Header>
          {date}
        </Header>
        <div>
          {records.map(r => {
            return <Item key={r.createAt}>
              <div className="tags oneLine">
                {r.tagIds.length === 0 ? '无' : r.tagIds
                  .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                  .reduce((result, span, index, array) =>
                    result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                }
              </div>
              {r.note && <div className="note">
                {r.note}
              </div>}
              <div className="amount">
                <span>￥{r.amount}</span>
              </div>
            </Item>;
          })}
        </div>
      </div>)}
    </Layout>
  );
}

export default Statistics;