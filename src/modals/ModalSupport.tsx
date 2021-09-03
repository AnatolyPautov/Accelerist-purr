import React from 'react';
import styled from 'styled-components';
import { TextBold } from '../ui/TextBold';
import { Form, Field } from 'react-final-form';
import { Text } from '../ui/Text';
interface LoginProps {}

const ModalSupport: React.FC<LoginProps> = ({}) => {
  const onSubmit = (values: any) => {
    if (values) {
      /* setJoined(true); */
    }
  };
  return (
    <Background>
      <ModalWrapper>
        <Modal>
          <ModalHeader>
            <TextBold>Write to Support</TextBold>
          </ModalHeader>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <FormContainer onSubmit={handleSubmit}>
                <div>
                  <Text mb={'4'}>Reason</Text>
                  <FormDropdown name="favoriteColor" component="select">
                    <option value="#ff0000">Service Quality</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
                  </FormDropdown>
                </div>
                <div>
                  <Text>Text</Text>
                  <Field
                    name="notes"
                    component="textarea"
                    placeholder="Notes"
                  />
                </div>
                <div>
                  <button type="submit" disabled={submitting || pristine}>
                    Submit
                  </button>
                </div>
              </FormContainer>
            )}
          />
        </Modal>
      </ModalWrapper>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  content: '';
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
  width: 446px;
  margin: 50px 0;
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
  content: '';
  top: 0;
  right: 0;
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  border-radius: 50%;
  margin: 10px 10px 0 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
const ModalHeader = styled.div`
  background: #f2f2f2;
  padding: 40px 40px 16px;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 40px;
`;
const FormDropdown = styled(Field)`
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 10px 30px 10px 16px;
`;
const Ssdfsdf = styled.div`
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 10px 30px 10px 16px;
`;

export default ModalSupport;
