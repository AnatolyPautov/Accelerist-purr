import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import heart from "../assets/icons/heart-likeModal.svg";
import cross from "../assets/icons/close-cross.svg";
import { ButtonNow } from "../ui/ButtonNow";
import { closeLikeModal } from "../store/companiesSlice";
import { useAppDispatch } from "../store/store";

const ModalLike = () => {
  const dispatch = useAppDispatch();

  const onCloseModal = ({ key }: KeyboardEvent) => {
    if (key === "Escape") {
      dispatch(closeLikeModal());
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onCloseModal);
  });
  return (
    <Background onClick={() => dispatch(closeLikeModal())}>
      <ModalWrapper>
        <Modal onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ReactSVG src={heart} />
            <CloseСross onClick={() => dispatch(closeLikeModal())}>
              <ReactSVG src={cross} />
            </CloseСross>
          </ModalHeader>
          <ModalBody>
            <Title>United Nations has been added to favorites</Title>
            <Text>You can see the list of favorites on the dashboard page</Text>
            <ButtonNow
              variant="second"
              onClick={() => dispatch(closeLikeModal())}
            >
              Done
            </ButtonNow>
          </ModalBody>
        </Modal>
      </ModalWrapper>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
  z-index: 99;
`;
const ModalWrapper = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  min-height: 100%;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  width: 333px;
  min-height: 412px;
  background-color: white;
  border-radius: 6px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const CloseСross = styled.div`
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  margin: 18px 18px 0 0;
`;
const ModalHeader = styled.div`
  background: #f2f2f2;
  padding: 47px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBody = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: #122434;
  text-align: center;
  margin-bottom: 8px;
`;
const Text = styled.div`
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #122434;
  margin-bottom: 32px;
`;

export default ModalLike;
