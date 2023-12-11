import React, { useReducer, Fragment } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { reducer, initialState } from "Components/duplicates/reducer";
import { WITH_BORDER } from "Components/duplicates/constants";
import {
  Count,
  Container,
  DuplicatedElement,
  HoverText,
  Content,
  ErrorSpan,
  Form,
  Input,
  Button,
  Title,
  SubTitle,
  Item,
  Arrays,
  ItemsContainer,
} from "./styles";

const Duplicates = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const findDuplicates = (arr) => {
    const countMap = {};
    arr.forEach((item) => {
      countMap[item] = (countMap[item] || 0) + 1;
    });

    const duplicates = {};
    Object.keys(countMap).forEach((item) => {
      if (countMap[item] >= 2) {
        duplicates[item] = countMap[item];
      }
    });

    return duplicates;
  };

  const duplicates = findDuplicates(state.arr);

  const geIndexes = (element) => {
    let indexesOfelement = [];
    state.arr.forEach((value, idx) => {
      if (value === +element) {
        indexesOfelement.push(idx);
      }
    });
    return indexesOfelement;
  };

  const indexesOfOccurrences = geIndexes(state.current);

  const handlePush = () => {
    const newValue = +state.value;
    if (state.value.trim() !== "") {
      dispatch({ type: "SET_ARR", payload: [...state.arr, newValue] });
      dispatch({ type: "SET_INPUT_ERROR", payload: false });
    } else {
      dispatch({ type: "SET_INPUT_ERROR", payload: true });
    }
  };

  const handleChange = (e) => {
    dispatch({ type: "SET_VALUE", payload: e.target.value });
  };

  const renderList = (arr, withBorder) => {
    const isNotEmpty = arr.length > 0;

    return (
      <>
        {isNotEmpty &&
          (withBorder ? (
            <SubTitle>My array:</SubTitle>
          ) : (
            <SubTitle>Indexes:</SubTitle>
          ))}
        {isNotEmpty && (
          <ItemsContainer withBorder={withBorder}>
            {arr.map((el, index) => (
              <Fragment key={index}>
                <Item isSpecial={el === +state.current && withBorder}>
                  {el}
                </Item>
                {index < arr.length - 1 && <span>,</span>}
              </Fragment>
            ))}
          </ItemsContainer>
        )}
      </>
    );
  };

  useShallowEffect(() => {
    dispatch({ type: "SET_VALUE", payload: "" });
  }, [state.arr]);

  return (
    <div className="App">
      <Form>
        <Input
          type="number"
          placeholder="Add element to the array"
          value={state.value}
          onChange={(e) => handleChange(e)}
        />
        {state.inputError && (
          <ErrorSpan> Please enter a valid number !</ErrorSpan>
        )}
        <Button onClick={handlePush}>Push</Button>
        <Arrays>
          {renderList(state.arr, WITH_BORDER)}
          {renderList(indexesOfOccurrences)}
        </Arrays>
        <Title>Duplicated elements:</Title>
      </Form>
      <Container>
        {Object.keys(duplicates).map((el, idx) => (
          <Content key={idx}>
            <DuplicatedElement
              isSelected={el === state.current}
              onClick={() => {
                geIndexes(el);
                dispatch({ type: "SET_CURRENT", payload: el });
              }}
            >{`${el}`}</DuplicatedElement>
            <Count>
              {duplicates[el]}
              <HoverText className="hover-text">
                Number of Occurrences
              </HoverText>
            </Count>
          </Content>
        ))}
      </Container>
    </div>
  );
}

export default Duplicates

