import React from 'react'
import { Message } from '../redux/reducers/messages'
import styled from 'styled-components';
import UserAvatar from './UserAvatar';

interface MessageProps {
  message: Message;
}

export default function MessageBox(props: MessageProps) {
  const { message } = props;
  const isSellerMessage = message.authorId === null;
  return (
    <Content even={isSellerMessage}>
      <UserAvatar username={message.author.username} image={message.author.avatar} />
      <MessageText even={isSellerMessage}>
        {message.text}
      </MessageText>
    </Content>
  )
}

interface ContentProps {
  even: boolean;
}

const Content = styled.div<ContentProps>`
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.even ? 'row': 'row-reverse' };
  flex: 1;
  flex-basis: 100%;
`;

interface MessageTextProps {
  even: boolean;
}

const MessageText = styled.div<MessageTextProps>`
  flex: 1;
  padding: 10px;
  text-align: justify;
  background: ${props => props.even ? props.theme.white : props.theme.blue};
  border-radius: 5px;
  color: ${props => props.even ? props.theme.black : props.theme.white};
  margin: 0 10px; 
`;
