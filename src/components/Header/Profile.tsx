import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../store/store';
import { logOut } from '../../store/userSlice';
import { Text } from '../../ui/Text';

interface Props {
  responsive?: boolean;
}
const Profile: React.FC<Props> = ({ responsive }) => {
  const [listActive, setListActive] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();
  return (
    <ProfileContainer
      responsive={responsive}
      onClick={() => setListActive(!listActive)}
    >
      <ProfileAccount>
        <ProfileLogo>-_-</ProfileLogo>
        <Text color="#122434">United Nations</Text>
      </ProfileAccount>
      <ProfileList listActive={listActive}>
        <ProfileText>Profile</ProfileText>
        <ProfileText>User Profile</ProfileText>
        <ProfileText>Users</ProfileText>
        <ProfileText onClick={() => dispatch(logOut())}>Log out</ProfileText>
      </ProfileList>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div<{ responsive?: boolean }>`
  position: relative;
  @media (max-width: 1170px) {
    display: ${({ responsive }) => (responsive ? 'block' : 'none')};
  }
`;
const ProfileAccount = styled.button`
  background: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 177px;
  &:hover div,
  &:focus div {
    border: 1px solid #2baee0;
  }
`;
const ProfileLogo = styled.div`
  width: 36px;
  height: 36px;
  background-color: white;
  border-radius: 6px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileList = styled.div<{ listActive: boolean }>`
  display: ${({ listActive }) => (listActive ? 'block' : 'none')};
  position: absolute;
  top: 48px;
  left: 0;
  width: 177px;
  height: 162px;
  background-color: white;
  border-radius: 6px;
  padding: 24px;
  @media (max-width: 1170px) {
    top: -180px;
  }
`;
const ProfileText = styled.p`
  cursor: pointer;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  margin-bottom: 14px;
  transition: 0.2s;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: #f05658;
  }
`;

export default Profile;
