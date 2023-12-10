import React, { useReducer, Fragment } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { reducer, initialState } from "./reducer";
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
} from "./styles";

const Duplicates = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const findDuplicates = (arr) => {
        const countMap = {};
        arr.forEach((item) => {
            countMap[item] = (countMap[item] || 0) + 1;
        });

        const duplicates = {};
        Object.keys(countMap).forEach((item, index) => {
            if (countMap[item] >= 2) {
                duplicates[item] = countMap[item];
            }
        });

        return duplicates;
    };

    const duplicates = findDuplicates(state.arr);
    console.log("duplicates", duplicates);

    const handlePush = () => {
        const newValue = +state.value;
        if (state.value.trim() !== "" ) {
            dispatch({ type: "SET_ARR", payload: [...state.arr, newValue] });
            dispatch({ type: "SET_INPUT_ERROR", payload: false });
        } else {
            dispatch({ type: "SET_INPUT_ERROR", payload: true });
        }
    };

    const handleChange = (e) => {
        dispatch({ type: "SET_VALUE", payload: e.target.value });
    };

    useShallowEffect(() => {
        dispatch({ type: "SET_VALUE", payload: "" });
    }, [state.arr]);

    return (
        <>
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
                <Title>My array:</Title>
                <div>
                    [
                    {state.arr.map((el, index) => (
                        <Fragment key={index}>
                            <span>{el}</span>
                            {index < state.arr.length - 1 && <span>,</span>}
                        </Fragment>
                    ))}
                    ]
                </div>
                <Title>Duplicated elements:</Title>
            </Form>
            <Container>
                {Object.keys(duplicates).map((el, idx) => (
                    <Content key={idx}>
                        <DuplicatedElement>{`${el}`}</DuplicatedElement>
                        <Count>
                            {duplicates[el]}
                            <HoverText className="hover-text">
                                Number of Occurrences
                            </HoverText>
                        </Count>
                    </Content>
                ))}
            </Container>
        </>
    );
}

export default Duplicates
