import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  margin: 5px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
`;

export const Count = styled.span`
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: #3498db;
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  &:hover {
    background-color: #2980b9;
    & .hover-text {
      display: block;
    }
  }
`;

export const DuplicatedElement = styled.span`
  font-size: 22px;
  width: 30px;
  height: 30px;
  margin: 8px 0 0 16px;
`;

export const HoverText = styled.span`
  display: none;
  position: absolute;
  bottom: 100%; /* Position above the count */
  left: 50%;
  transform: translateX(-50%);
  background-color: #3498db;
  color: #fff;
  padding: 4px 8px;
  border-radius: 5px;
  width: max-content;
`;

export const ErrorSpan = styled.span`
  color: red;
  text-align: justify;
  margin-bottom: 10px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 8px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 8px;
  background-color: black;
  color: #fff;
  width: 100px;
`;

export const Title = styled.h2`
  text-align: justify;
`;
