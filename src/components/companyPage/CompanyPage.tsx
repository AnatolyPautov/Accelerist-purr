import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { ReactSVG } from 'react-svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import heart from '../../assets/icons/heart.svg';
import globe from '../../assets/icons/globe.svg';
import phone from '../../assets/icons/phone.svg';
import mapPin from '../../assets/icons/map-pin.svg';
import { Row } from '../../ui/Row';
import { GrayText } from '../../ui/GrayText';
import { Subtitle } from '../../ui/Subtitle';
import { Title } from '../../ui/Title';

interface CompanyPageProps {}
const CompanyPage: React.FC<CompanyPageProps> = ({}) => {
  return (
    <Container>
      <CompanyHeader>
        <Row>
          <Logo>Logo</Logo>
          <div>
            <Row>
              <Title mb={'4'}>NameCompany</Title>
              <ReactSVG src={heart} />
            </Row>
            <GrayText containerStyled={CompanyDesc}>
              Administration, Business Support and Waste Management Services
            </GrayText>
            <Row containerStyled={SocialStyle}>
              <ReactSVG src={facebook} />
              <ReactSVG src={twitter} />
              <ReactSVG src={twitter} />
            </Row>
          </div>
        </Row>
      </CompanyHeader>
      <Row containerStyled={Content}>
        <Main>
          <Title mb={'24'}>Business Description Products</Title>
          <Subtitle mb={'16'}>Description</Subtitle>
          <Desc>
            We are a national, award-winning nonprofit that provides the most
            flexible and accountable funding for K-12 teachers and schools with
            our proprietary, easy-to-use education fundraising platform. Through
            local impact, our goal is to give every child the tools they deserve
            to succeed in school.
          </Desc>
          <Subtitle mb={'16'}>Products & Brand Descriptions</Subtitle>
          <Desc>
            We are a national, award-winning nonprofit that provides the most
            flexible and accountable funding for K-12 teachers and schools with
            our proprietary, easy-to-use education fundraising platform. Through
            local impact, our goal is to give every child the tools they deserve
            to succeed in school.
          </Desc>
          <Subtitle mb={'16'}>Structure</Subtitle>
          <Desc>Sole proprietorship</Desc>
          <Subtitle mb={'16'}>Reported</Subtitle>
          <ReportedBlock>
            <Row containerStyled={Reported}>
              <GrayText>Revenue Reported</GrayText>
              <p>$ 4,456,379</p>
            </Row>
            <Row containerStyled={Reported}>
              <GrayText>Employees Reported</GrayText>
              <p>42</p>
            </Row>
          </ReportedBlock>
          <Subtitle mb={'16'}>Company Ticker</Subtitle>
          <Row containerStyled={TickerBlock}>
            <Ticker>
              <p>WMT</p>
              <GrayText>London Stock Exchange</GrayText>
            </Ticker>
            <Ticker>
              <p>WMT</p>
              <GrayText>Nasdaq</GrayText>
            </Ticker>
            <Ticker>
              <p>WMT</p>
              <GrayText>Stock Exchange of Singapore</GrayText>
            </Ticker>
          </Row>
          <Subtitle mb={'16'}>Company Contacts</Subtitle>
          <Contacts>
            <Row>
              <Contact>
                <Icon>
                  <ReactSVG src={globe} />
                </Icon>
                <a href="ageliromir.com">ageliromir.com</a>
              </Contact>
              <Contact>
                <Icon>
                  <ReactSVG src={phone} />
                </Icon>
                <a href="tel:(702) 555-0122">(702) 555-0122</a>
              </Contact>
              <Contact>
                <Icon>
                  <ReactSVG src={mapPin} />
                </Icon>
                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
              </Contact>
            </Row>
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
              <GrayText>Cash Contributions</GrayText>
              <p>$ 4,456,379</p>
            </Row>
            <Row containerStyled={Сontribution}>
              <GrayText>Employees Reported</GrayText>
              <p>42</p>
            </Row>
            <Row containerStyled={Сontribution}>
              <GrayText>Employees Reported</GrayText>
              <p>42</p>
            </Row>
            <Row containerStyled={Сontribution}>
              <GrayText>In-Kind Contributions</GrayText>
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
              <li>fsdf</li>
            </CharitablePartnersList>
          </CharitablePartnersContainer>
          <Subtitle mb={'22'}>Partnership and Program Details</Subtitle>
        </Main>
        <div></div>
      </Row>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 32px;
  padding-bottom: 60px;
  max-width: 1096px;
  border-radius: 6px;
  overflow: hidden;
`;
const CompanyHeader = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  background: #f2f2f2;
`;
const Logo = styled.div`
  background: #ffffff;
  border-radius: 8px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;
const SocialStyle = css`
  width: 84px;
  justify-content: space-between;
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
  width: 206px;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0 24px 24px;
`;

const Contacts = styled.div`
  margin: 26px 0 50px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 18px 0 18px 24px;
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
`;
/// TEXT //////
const Desc = styled.p`
  font-size: 16px;
  line-height: 155%;
  color: #122434;
  margin-bottom: 24px;
`;
const CompanyDesc = css`
  margin-bottom: 22px;
`;

export default CompanyPage;
