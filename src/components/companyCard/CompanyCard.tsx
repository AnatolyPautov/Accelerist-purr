import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Text } from '../../ui/Text';
import { Subtitle } from '../../ui/Subtitle';
import { useAppDispatch } from '../../store/store';
import { addCompany, addLike, addDislike } from '../../store/companiesSlice';
import { numberWithCommas } from '../../utils/NumberWithCommas';
import * as Types from '../../types/types';
import { ButtonNow } from '../../ui/ButtonNow';
import { HeartIcon } from '../../assets/icons/HeartIcon';
import ModalLike from '../../modals/ModalLike';

interface CompanyCardProps {
  company: Types.Company;
}
const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const [active, setActive] = React.useState<boolean>(true);
  const { name, city, state, street, zipCode, revenue, id, fax, like } =
    company;
  const address = street + '. ' + city + ', ' + state + ' ' + zipCode;

  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <>
      {/* {active && <ModalLike />} */}
      <Company>
        <Body>
          <LogoRanking>
            <Logo>Logo</Logo>
            <Ranking>
              <Text>Priority Ranking</Text>
              <p>12</p>
            </Ranking>
          </LogoRanking>
          <Info>
            <div>
              <Subtitle mb="12">{name}</Subtitle>
              <Text>{address}</Text>
              <Text>{fax || 'the phone number is missing'}</Text>
            </div>
            <Data>
              <CSRFocusBlock>
                <Text>CSR Focus</Text>
                <Categories>
                  <Category>No Information</Category>
                </Categories>
              </CSRFocusBlock>
              <RevenueBlock>
                <Text>Revenue</Text>
                <Revenue>$ {numberWithCommas(revenue)}</Revenue>
              </RevenueBlock>
            </Data>
          </Info>
          <Buttons>
            <ButtonNow
              variant="like"
              onClick={() =>
                like ? dispatch(addDislike(id)) : dispatch(addLike(id))
              }
            >
              <HeartIcon isLike={like} />
            </ButtonNow>
            <ButtonNow
              onClick={() => {
                dispatch(addCompany(id));
                history.push(`/audience/${id}`);
              }}
            >
              Profile
            </ButtonNow>
          </Buttons>
        </Body>
      </Company>
    </>
  );
};

const Company = styled.div`
  background-color: white;
  width: 100%;
  max-width: 536px;
  height: 268px;
  padding: 26px 32px;
  border-radius: 6px;
  margin-bottom: 24px;
  &:nth-child(2n + 1) {
    margin-right: 24px;
    @media (max-width: 420px) {
      margin-right: 0;
    }
  }
  @media (max-width: 768px) {
    max-width: 340px;
    height: 284px;
    padding: 24px 16px;
  }
`;
const Body = styled.div`
  display: grid;
  grid-gap: 24px 16px;
  grid-template-areas:
    'avatar info'
    'avatar buttons';
  @media (max-width: 768px) {
    grid-template-areas:
      'avatar info'
      'buttons buttons';
    grid-gap: 16px;
  }
`;
const LogoRanking = styled.div`
  grid-area: avatar;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  width: 168px;
  @media (max-width: 768px) {
    width: 124px;
  }
`;
const Info = styled.div`
  grid-area: info;
  width: 100%;
  height: 156px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
`;
const Logo = styled.div`
  height: 156px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 124px;
  }
`;
const Ranking = styled.div`
  padding-top: 8px;
  height: 59px;
  text-align: center;
`;
const Data = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
    border: none;
  }
`;
const CSRFocusBlock = styled.div`
  padding: 0 5px 12px 0;
  width: 50%;
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    margin-bottom: 17px;
  }
`;
const RevenueBlock = styled.div`
  width: 50%;
  padding: 0 0 12px 20px;
  border-left: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: none;
    padding: 0;
    width: 100%;
  }
`;
const Categories = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
`;
const Revenue = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  margin-top: 4px;
`;
const Category = styled(Revenue)`
  margin-top: 0;
  margin-right: 16px;
`;
export default CompanyCard;
