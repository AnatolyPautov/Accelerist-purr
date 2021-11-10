import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { ReactSVG } from "react-svg";
import facebook from "../../../assets/icons/facebook.svg";
import twitter from "../../../assets/icons/twitter.svg";
import { Row } from "../../../ui/Row";
import { Text } from "../../../ui/Text";
import { Title } from "../../../ui/Title";
import { useSelector } from "react-redux";
import { getCompaniesState } from "../../../store/store";
import { HeartIcon } from "../../../assets/icons/HeartIcon";

const CompanyHeader = () => {
  const stateCompany = useSelector(getCompaniesState);
  const { name } = stateCompany.currentCompany;

  const Ref = React.useRef<any>(null);
  React.useEffect(() => {
    if (Ref.current) {
      Ref.current.scrollIntoView();
    }
  }, []);
  return (
    <Container ref={Ref}>
      <Row>
        <Logo>Logo</Logo>
        <div>
          <Row>
            <Title mb={"4"}>{name}</Title>
            <HeartIcon />
          </Row>
          <Text mb={"22"}>
            Administration, Business Support and Waste Management Services
          </Text>
          <Row containerStyled={SocialStyle}>
            <ReactSVG src={facebook} />
            <ReactSVG src={twitter} />
            <ReactSVG src={twitter} />
          </Row>
        </div>
      </Row>
    </Container>
  );
};

const Container = styled.div`
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

export default CompanyHeader;
