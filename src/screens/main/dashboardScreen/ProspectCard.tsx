import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { addCompanies } from '../../../store/companySlice';
import { setCurrentProspect } from '../../../store/prospectsSlice';
import { useAppDispatch } from '../../../store/store';
import { Subtitle } from '../../../ui/Subtitle';
import { Text } from '../../../ui/Text';

interface Props {
  item: any;
}
const ProspectCard: React.FC<Props> = ({ item }) => {
  const { name, prospectsAvailable, id, lastAuthor, filters } = item;

  const dispatch = useAppDispatch();

  const openOneProspect = () => {
    dispatch(setCurrentProspect(name));
    dispatch(
      addCompanies({
        page: 1,
        limit: 12,
        q: filters.q,
        revenueMin:
          typeof filters.revenueMin === 'string' ? null : filters.revenueMin,
        revenueMax:
          typeof filters.revenueMax === 'string' ? null : filters.revenueMax,
      })
    );
  };

  return (
    <Card to={`/prospects/${id}`} onClick={() => openOneProspect()}>
      <Subtitle mb="9">{name || 'Name'}</Subtitle>
      <Line />
      <Text mb="8">Filters</Text>
      <Filters>
        <Category>Travel Industry</Category>
      </Filters>
      <Data>
        <DataItem>
          <Text mb="8">№ of Prospects Available</Text>
          <DataValue>{prospectsAvailable}</DataValue>
        </DataItem>
        <DataItem>
          <Text mb="8">№ of Prospects Available</Text>
          <DataValue>72</DataValue>
        </DataItem>
      </Data>
      <CardBottom>
        <Owner>
          <Ava></Ava>
          <div>
            <TextBold>{lastAuthor.firstName}</TextBold>
            <Text>{lastAuthor.role}</Text>
          </div>
        </Owner>
        <LastActivity>
          <Text mb="4" color="#122434">
            Last Activity
          </Text>
          <Text>1 Jul 2020</Text>
        </LastActivity>
      </CardBottom>
    </Card>
  );
};

const Card = styled(NavLink)`
  background: #ffffff;
  border-radius: 6px;
  padding: 24px;
  width: 536px;
  margin-bottom: 24px;
  &:nth-child(2n + 1) {
    margin-right: 24px;
  }
`;
const Line = styled.div`
  background: #e8e8e8;
  height: 1px;
  width: 100%;
  margin-bottom: 16px;
`;
const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 29px;
`;
const Category = styled.div`
  border: 1px solid #caf0ff;
  border-radius: 6px;
  padding: 6px 10px;
  margin: 0 4px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`;
const Data = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
const DataItem = styled.div`
  background: #f9f9f9;
  border-radius: 4px;
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  &:first-child {
    margin-right: 18px;
  }
`;
const DataValue = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`;
const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Owner = styled.div`
  display: flex;
  align-items: center;
`;
const Ava = styled.div`
  border-radius: 50%;
  background-color: #645035;
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;
const TextBold = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  margin-bottom: 4px;
`;
const LastActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export default ProspectCard;
