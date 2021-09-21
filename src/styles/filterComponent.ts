import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const TextField = styled.input`
	height: 32px;
	width: 100%;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid gray;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;
export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
	display: flex;
  align-items: center;
  flex-direction:row;
`;

export const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
  border: 1px solid gray;
  background-color: #9C1111;
  color:white;
	height: 32px;
	width: 50px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
