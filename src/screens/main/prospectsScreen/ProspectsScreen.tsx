import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Pagination from '../../../components/pagination';
import ProspectCard from '../../../components/prospectCard';
import { addProspects } from '../../../store/prospectsSlice';
import { getProspectsState, useAppDispatch } from '../../../store/store';
import Spinner from '../../../ui/Spinner';
import { Wrapper } from '../../../ui/Wrapper';

interface Props {}
const ProspectsScreen: React.FC<Props> = ({}) => {
  const prospects = useSelector(getProspectsState);

  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <Container>
        <Top>
          <Sort>
            <SortText>Sort by</SortText>
            <SortTabs>
              <input type="radio" name="tab-btn" id="tab-btn-1" value="" />
              <label
                htmlFor="tab-btn-1"
                onClick={() =>
                  dispatch(
                    addProspects({ page: 1, limit: 12, sort: 'alphabet' })
                  )
                }
              >
                Alphabet
              </label>
              <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
              <label
                htmlFor="tab-btn-2"
                onClick={() =>
                  dispatch(
                    addProspects({ page: 1, limit: 12, sort: 'available' })
                  )
                }
              >
                Prospects Available
              </label>
              <input type="radio" name="tab-btn" id="tab-btn-3" value="" />
              <label
                htmlFor="tab-btn-3"
                onClick={() =>
                  dispatch(
                    addProspects({
                      page: 1,
                      limit: 15,
                      sort: 'last-activity',
                    })
                  )
                }
              >
                Last Activity
              </label>
            </SortTabs>
          </Sort>
          <PaginationTop>
            <Pagination page="prospects" />
          </PaginationTop>
        </Top>
        <ItemContainer>
          {prospects.loading ? (
            <Spinner />
          ) : (
            prospects.prospects.map((item, index) => (
              <ProspectCard item={item} key={index} />
            ))
          )}
        </ItemContainer>
        <PaginationBottom>
          <Pagination page="prospects" />
        </PaginationBottom>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  padding: 32px 0;
  @media (max-width: 525px) {
    padding: 20px 0;
  }
`;
const Top = styled.div`
  max-width: 1096px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ItemContainer = styled.div`
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const PaginationTop = styled.div`
  @media (max-width: 525px) {
    display: none;
  }
`;
const PaginationBottom = styled.div`
  display: none;
  @media (max-width: 525px) {
    display: block;
  }
`;
const Sort = styled.div`
  display: flex;
  align-items: center;
`;
const SortText = styled.div`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-right: 26px;
`;
const SortTabs = styled.div`
  display: flex;
  align-items: center;
  input[type='radio'] {
    display: none;
  }
  label {
    background: transparent;
    font-size: 12px;
    line-height: 150%;
    font-family: 'Rubik', sans-serif;
    color: #122434;
    margin-right: 22px;
    cursor: pointer;
    padding-bottom: 2px;
    &:first-child {
      margin-left: 26px;
    }
  }
  input[type='radio']:checked + label {
    border-bottom: 2px solid #2baee0;
  }
`;
export default ProspectsScreen;
