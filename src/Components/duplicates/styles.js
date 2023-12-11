import styled, { css } from "styled-components";
import * as colors from "utils/colors";

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
  background-color: ${colors.PRIMARY_BLUE};
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;

  &:hover {
    background-color: ${colors.DARK_BLUE};
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

  &:hover {
    background-color: ${colors.LIGHT_GRAY};
  }

  ${(props) =>
    props.isSelected &&
    css`
      border-bottom: 3px solid ${colors.GREEN};
      padding: 2px 8px;
    `}
`;

export const HoverText = styled.span`
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colors.PRIMARY_BLUE};
  color: #fff;
  padding: 4px 8px;
  border-radius: 5px;
  width: max-content;
`;

export const ErrorSpan = styled.span`
  color: ${colors.PRIMARY_RED};
  text-align: justify;
  margin-bottom: 10px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid ${colors.LIGHT_GRAY_TEXT};
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
  border: 1px solid ${colors.BLACK};
  margin-bottom: 10px;
  padding: 8px;
  background-color: ${colors.BLACK};
  color: #fff;
  width: 100px;
`;

export const Title = styled.h2`
  text-align: justify;
`;

export const SubTitle = styled.span`
  text-align: justify;
`;

export const ItemsContainer = styled.div`
  display: inline-block;
  border: ${(props) =>
    props.withBorder ? `1px solid ${colors.PRIMARY_BLUE}` : "none"};
  padding: ${(props) => (props.withBorder ? "8px" : "0")};
  margin: ${(props) => (props.withBorder ? "8px 0" : "0")};
`;

export const Item = styled.span`
  font-size: 22px;
  width: 30px;
  height: 30px;

  ${(props) =>
    props.isSpecial &&
    css`
      border-bottom: 3px solid ${colors.ORANGE};
      padding: 2px 8px;
    `}
`;

export const Arrays = styled.div`
  display: flex;
  flex-direction: column;
`;
