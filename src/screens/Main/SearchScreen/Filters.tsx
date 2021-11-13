import { FormApi } from "final-form";
import React from "react";
import { Field, Form, FormProps } from "react-final-form";
import styled from "styled-components";
import { CheckBox } from "../../../ui/Checkbox";
import InputField from "../../../ui/InputField";
import { SelectField } from "../../../ui/SelectField";
import { Subtitle } from "../../../ui/Subtitle";
import { Tab } from "../../../ui/Tab";
import { Text } from "../../../ui/Text";
import { Title } from "../../../ui/Title";
import RangeSlider from "../../../ui/RangeSlider";
import { Button } from "../../../ui/Button";
import Context from "../../../context";
import { getCompaniesState, useAppDispatch } from "../../../store/store";
import { addCompanies } from "../../../store/companiesSlice";
import { useSelector } from "react-redux";

const Filtres = () => {
  const { filterActive, setFilterActive } = React.useContext(Context);

  const stateCompany = useSelector(getCompaniesState);
  const dispatch = useAppDispatch();

  const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(
      addCompanies({
        page: 1,
        limit: 12,
        q: stateCompany.searchParams.q,
        revenueMin: values.minRevenue,
        revenueMax: values.maxRevenue,
      })
    );
  };
  const eatOptions = [
    { label: "Chicken", value: "chicken" },
    { label: "Ham", value: "ham" },
    { label: "Mushrooms", value: "mushrooms" },
    { label: "Tuna", value: "tuna" },
  ];
  if (!filterActive) {
    return null;
  } else
    return (
      <Container>
        <Title mb={"18"}>Filters</Title>
        <TabContainer>
          <Tab active={true}>Advanced</Tab>
          <Tab>Customize</Tab>
        </TabContainer>
        <Form
          mutators={{
            setMinRevenue: (args, state, utils) => {
              utils.changeValue(state, "minRevenue", () => args[0]);
            },
            setMaxRevenue: (args, state, utils) => {
              utils.changeValue(state, "maxRevenue", () => args[0]);
            },
            setMinAge: (args, state, utils) => {
              utils.changeValue(state, "minAge", () => args[0]);
            },
            setMaxAge: (args, state, utils) => {
              utils.changeValue(state, "maxAge", () => args[0]);
            },
          }}
          onSubmit={onSubmitForm}
          render={({ handleSubmit, values, form }) => {
            return (
              <div>
                <Subtitle mb="16">Company</Subtitle>
                <CompanyContainer>
                  <CompanyBlock>
                    <Text mb="4">Industry</Text>
                    <Field
                      name="Industry"
                      placeholder="Search"
                      component={InputField}
                    />
                    <CheckBoxBlock>
                      <Box>
                        <Field
                          name="agriculture"
                          type="checkbox"
                          render={CheckBox}
                        >
                          Agriculture
                        </Field>
                      </Box>
                      <Box>
                        <Field
                          name="entertainment"
                          type="checkbox"
                          render={CheckBox}
                        >
                          Entertainment and Recrea..
                        </Field>
                      </Box>
                      <Box>
                        <Field name="bars" type="checkbox" render={CheckBox}>
                          Bars and Food Sevices
                        </Field>
                      </Box>
                      <Box>
                        <Field
                          name="remember"
                          type="checkbox"
                          render={CheckBox}
                        >
                          Remember
                        </Field>
                      </Box>
                    </CheckBoxBlock>
                    <SelectBox>
                      <Text mb="4">Scope</Text>
                      <Field name="scope" options={eatOptions}>
                        {({ input, meta, options }) => {
                          return (
                            <SelectField
                              name={input.name}
                              options={options}
                              onChange={(value: any) => input.onChange(value)}
                            />
                          );
                        }}
                      </Field>
                    </SelectBox>
                    <SelectBox>
                      <Text mb="4">CDR Focus</Text>
                      <Field name="focus" options={eatOptions}>
                        {({ input, meta, options }) => {
                          return (
                            <SelectField
                              name={input.name}
                              options={options}
                              onChange={(value: any) => input.onChange(value)}
                            />
                          );
                        }}
                      </Field>
                    </SelectBox>
                    <Text mb="4">Revenue</Text>
                    <Field name="revenue" form={form} component={RangeSlider} />
                  </CompanyBlock>
                  <CompanyBlock>
                    <Text mb="4">Geographic Location</Text>
                    <Field
                      name="Geographic Location"
                      placeholder="Search"
                      component={InputField}
                    />
                    <CheckBoxBlock>
                      <Box>
                        <Field
                          name="agriculture"
                          type="checkbox"
                          render={CheckBox}
                        >
                          Agriculture
                        </Field>
                      </Box>
                      <Box>
                        <Field
                          name="entertainment"
                          type="checkbox"
                          render={CheckBox}
                        >
                          Entertainment and Recrea..
                        </Field>
                      </Box>
                      <Box>
                        <Field name="bars" type="checkbox" render={CheckBox}>
                          Bars and Food Sevices
                        </Field>
                      </Box>
                      <Box>
                        <Field
                          name="remember"
                          type="checkbox"
                          render={CheckBox}
                        >
                          Remember
                        </Field>
                      </Box>
                    </CheckBoxBlock>
                    <SelectBox>
                      <Text mb="4">SDG Goals</Text>
                      <Field name="goals" options={eatOptions}>
                        {({ input, meta, options }) => {
                          return (
                            <SelectField
                              name={input.name}
                              options={options}
                              onChange={(value: any) => input.onChange(value)}
                            />
                          );
                        }}
                      </Field>
                    </SelectBox>
                    <SelectBox>
                      <Text mb="4">Total Annual Contributions</Text>
                      <Field name="contributions" options={eatOptions}>
                        {({ input, meta, options }) => {
                          return (
                            <SelectField
                              name={input.name}
                              options={options}
                              onChange={(value: any) => input.onChange(value)}
                            />
                          );
                        }}
                      </Field>
                    </SelectBox>
                  </CompanyBlock>
                </CompanyContainer>
                <Subtitle mb="16">Customer Demographics</Subtitle>
                <CompanyContainer>
                  <CompanyBlock>
                    <Text mb="4">Gender</Text>
                    <TabContainer>
                      <Tab active={true}>Male</Tab>
                      <Tab>Female</Tab>
                      <Tab>Both</Tab>
                    </TabContainer>
                    <SelectBox>
                      <Text mb="4">Household Income</Text>
                      <Field name="household" options={eatOptions}>
                        {({ input, meta, options }) => {
                          return (
                            <SelectField
                              name={input.name}
                              options={options}
                              onChange={(value: any) => input.onChange(value)}
                            />
                          );
                        }}
                      </Field>
                    </SelectBox>
                    <Text mb="4">Age</Text>
                    <Field
                      name="age"
                      form={form}
                      min={18}
                      max={70}
                      component={RangeSlider}
                    />
                  </CompanyBlock>
                  <CompanyBlock>
                    <Text mb="4">Relations</Text>
                    <TabContainer>
                      <Tab active={true}>Single</Tab>
                      <Tab>Married</Tab>
                    </TabContainer>
                    <SelectBox>
                      <Text mb="4">Ethnicity</Text>
                      <Field name="ethnicity" options={eatOptions}>
                        {({ input, meta, options }) => {
                          return (
                            <SelectField
                              name={input.name}
                              options={options}
                              onChange={(value: any) => input.onChange(value)}
                            />
                          );
                        }}
                      </Field>
                    </SelectBox>
                  </CompanyBlock>
                </CompanyContainer>
                <Buttons>
                  <Button onClick={() => setFilterActive(!filterActive)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    search={true}
                    isLoading={stateCompany.loading}
                  >
                    Search
                  </Button>
                </Buttons>
              </div>
            );
          }}
        />
      </Container>
    );
};

const Container = styled.div`
  background: white;
  max-width: 1096px;
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 57px;
`;
const TabContainer = styled.div`
  display: flex;
  background: #f8f8f8;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 100%;
  height: 40px;
  margin-bottom: 34px;
`;
const CompanyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
`;
const CompanyBlock = styled.div`
  width: 50%;
  &:first-child {
    margin-right: 23px;
  }
`;
const CheckBoxBlock = styled.div`
  height: 100px;
  overflow-y: scroll;
  margin: 18px 0 27px;
  direction: ltr;
  scrollbar-color: #d4aa70 #e4e4e4;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #c4c4c4;
  }
`;
const Box = styled.div`
  margin-bottom: 17px;
`;
const SelectBox = styled.div`
  margin-bottom: 24px;
`;
const Buttons = styled.div`
  display: flex;
`;

export default Filtres;
