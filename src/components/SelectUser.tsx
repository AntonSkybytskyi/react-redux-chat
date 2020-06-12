import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { UserType } from '../redux/reducers/currentUser';
import { changeUser } from '../redux/actions/currentUser';

export default function SelectUser() {
  const currentUser: UserType = useSelector((state: RootState) => state.currentUser.user);
  const dispatch = useDispatch();
  const isSeller = currentUser === UserType.SELLER;
  const isBuyer = currentUser === UserType.BUYER;
  const onSellerClicked = () => {
    dispatch(changeUser(UserType.SELLER));
  };
  const onBuyerClicked = () => {
    dispatch(changeUser(UserType.BUYER));
  };
  return (
    <Content>
      <Text selected={isSeller} onClick={onSellerClicked}>{UserType.SELLER}</Text> 
      / 
      <Text selected={isBuyer} onClick={onBuyerClicked}>{UserType.BUYER}</Text>
    </Content>
  )
}


const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

interface TextProps {
  selected: boolean;
}

const Text = styled.span<TextProps>`
  cursor: pointer;
  text-decoration: ${props => props.selected ? 'underline' : 'none' };
`;
