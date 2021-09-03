import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { ReactSVG } from 'react-svg';
import globeIcon from '../../assets/icons/globe.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import mapPinIcon from '../../assets/icons/map-pin.svg';
import { Row } from '../../ui/Row';
import { Text } from '../../ui/Text';
import { Subtitle } from '../../ui/Subtitle';
import { Title } from '../../ui/Title';
import CompanyHeader from './CompanyHeader';
import { useSelector } from 'react-redux';
import { getCompaniesState } from '../../store/store';
import Spinner from '../../ui/Spinner';
import { numberWithCommas } from '../../utils/NumberWithCommas';
import { TextBold } from '../../ui/TextBold';
import { Wrapper } from '../../ui/Wrapper';

interface CompanyPageProps {}
const CompanyPage: React.FC<CompanyPageProps> = ({}) => {
  const stateCompany = useSelector(getCompaniesState);
  const {
    revenue,
    descriptionList,
    employeeCount,
    ticker,
    website,
    phone,
    city,
    state,
    street,
    zipCode,
  } = stateCompany.currentCompany;
  const address = street + '. ' + city + ', ' + state + ' ' + zipCode;

  if (stateCompany.loading) {
    return <Spinner />;
  } else
    return (
      <Wrapper>
        <Container>
          <CompanyHeader />
          <Row containerStyled={Content}>
            <Main>
              <Title mb={'24'}>Business Description Products</Title>
              <Subtitle mb={'16'}>Description</Subtitle>
              <Desc>{descriptionList}</Desc>
              {/* <Subtitle mb={'16'}>Products & Brand Descriptions</Subtitle>
              <Desc>
              </Desc> */}
              <Subtitle mb={'16'}>Structure</Subtitle>
              <Desc>Sole proprietorship</Desc>
              <Subtitle mb={'16'}>Reported</Subtitle>
              <ReportedBlock>
                <Row containerStyled={Reported}>
                  <Text mb={'4'}>Revenue Reported</Text>
                  <DescBoldLittle>$ {numberWithCommas(revenue)}</DescBoldLittle>
                </Row>
                <Row containerStyled={Reported}>
                  <Text mb={'4'}>Employees Reported</Text>
                  <DescBoldLittle>
                    {numberWithCommas(employeeCount)}
                  </DescBoldLittle>
                </Row>
              </ReportedBlock>
              <Subtitle mb={'16'}>Company Ticker</Subtitle>
              <Row containerStyled={TickerBlock}>
                <Ticker>
                  <TextBold>{ticker || 'No information'}</TextBold>
                </Ticker>
              </Row>
              <Subtitle mb={'16'}>Company Contacts</Subtitle>
              <Contacts>
                <Contact>
                  <Icon>
                    <ReactSVG src={globeIcon} />
                  </Icon>
                  <a href={website}>{website}</a>
                </Contact>
                <Contact>
                  <Icon>
                    <ReactSVG src={phoneIcon} />
                  </Icon>
                  <a href={`tel:${phone}`}>{phone}</a>
                </Contact>
                <Contact>
                  <Icon>
                    <ReactSVG src={mapPinIcon} />
                  </Icon>
                  <p>{address}</p>
                </Contact>
              </Contacts>
              <Title mb={'24'}>Social Impact</Title>
              <SocialImpact>
                <Row>
                  <ImpactBlock>
                    <Subtitle mb={'16'}>Type of Investment</Subtitle>
                    <ImpactList>
                      <li>sdfsdfs</li>
                      <li>dfsdf</li>
                      <li>sdfsd</li>
                      <li>fsdf</li>
                    </ImpactList>
                  </ImpactBlock>
                  <ImpactBlock>
                    <Subtitle mb={'16'}>CRS Focus</Subtitle>
                    <ImpactList>
                      <li>sdfsdfs</li>
                      <li>dfsdf</li>
                      <li>sdfsd</li>
                      <li>fsdf</li>
                    </ImpactList>
                  </ImpactBlock>
                </Row>
              </SocialImpact>
              <Subtitle mb={'16'}>SDG Goal Alignment</Subtitle>
              <SDGContainer>
                <Row>
                  <SDGBlock></SDGBlock>
                  <SDGBlock></SDGBlock>
                  <SDGBlock></SDGBlock>
                </Row>
              </SDGContainer>
              <Subtitle mb={'16'}>Contributions</Subtitle>
              <ReportedBlock>
                <Row containerStyled={Сontribution}>
                  <Text>Cash Contributions</Text>
                  <p>$ 4,456,379</p>
                </Row>
                <Row containerStyled={Сontribution}>
                  <Text>Employees Reported</Text>
                  <p>42</p>
                </Row>
                <Row containerStyled={Сontribution}>
                  <Text>Employees Reported</Text>
                  <p>42</p>
                </Row>
                <Row containerStyled={Сontribution}>
                  <Text>In-Kind Contributions</Text>
                  <p>42</p>
                </Row>
              </ReportedBlock>
              <Subtitle mb={'16'}>Charitable partners</Subtitle>
              <CharitablePartnersContainer>
                <CharitablePartnersList>
                  <li>sdfsdfs</li>
                  <li>dfsdf</li>
                  <li>sdfsd</li>
                  <li>fsdf</li>
                  <li>fsdf</li>
                  <li>fsdf</li>
                  <li>fsdf</li>
                </CharitablePartnersList>
              </CharitablePartnersContainer>
              <Subtitle mb={'22'}>Partnership and Program Details</Subtitle>
              <WebsiteLink href="https://ru.linkedin.com/">
                Go to the company's website
              </WebsiteLink>
            </Main>
            <div></div>
          </Row>
        </Container>
      </Wrapper>
    );
};
const Container = styled.div`
  margin-top: 32px;
  padding-bottom: 60px;
  max-width: 1096px;
  border-radius: 6px;
  overflow: hidden;
`;
const Content = css`
  background: #ffffff;
`;
const Main = styled.div`
  padding: 32px 40px;
  border-right: 1px solid rgb(235, 235, 235);
  width: 100%;
  max-width: 730px;
`;
const ReportedBlock = styled.div`
  width: 100%;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 6px;
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
`;
const Reported = css`
  width: 50%;
  flex-direction: column;
  padding: 13px 0px;
  &:first-child {
    border-right: 1px solid rgb(232, 232, 232);
  }
`;
const Сontribution = css`
  width: 50%;
  flex-direction: column;
  padding: 13px 0px;
  &:nth-child(2n) {
    border-left: 1px solid rgb(232, 232, 232);
  }
  &:nth-child(1) {
    border-bottom: 1px solid rgb(232, 232, 232);
  }
  &:nth-child(2) {
    border-bottom: 1px solid rgb(232, 232, 232);
  }
`;
const TickerBlock = css`
  justify-content: space-between;
  margin-bottom: 32px;
`;
const Ticker = styled.div`
  border: 1px solid rgb(232, 232, 232);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
`;

const Contacts = styled.div`
  margin: 26px 0 50px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 18px 0 18px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Contact = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 25px;
  cursor: pointer;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  &:hover {
    text-decoration: underline;
  }
`;
const Icon = styled.div`
  margin-right: 17px;
`;
const SocialImpact = styled.div`
  margin-bottom: 32px;
`;
const ImpactBlock = styled.div`
  width: 50%;
  &:first-child {
    margin-right: 24px;
  }
`;
const ImpactList = styled.ul`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 24px 0 24px 38px;
  list-style: none;
  li:before {
    content: '.';
    color: #2baee0;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;
const SDGContainer = styled.div`
  margin-bottom: 32px;
`;
const SDGBlock = styled.div`
  width: 112px;
  height: 112px;
  background: #eb1c2d;
  border-radius: 6px;
  margin-right: 16px;
`;

const CharitablePartnersContainer = styled(SocialImpact)`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
`;
const CharitablePartnersList = styled(ImpactList)`
  border: none;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 50%;
  }
`;
const WebsiteLink = styled.a`
  color: #2baee0;
`;
/// TEXT //////
const Desc = styled.p`
  font-size: 16px;
  line-height: 155%;
  color: #122434;
  margin-bottom: 24px;
`;
const DescBoldLittle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: #122434;
  white-space: nowrap;
`;

export default CompanyPage;
