import React, { useState, useContext, useEffect, createRef, FormEvent } from 'react'
import styled from 'styled-components'
import { TradeItem } from '../redux/reducers/trades';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { deleteTrade, markAsReadSeller, markAsReadBuyer, markAsUnreadBuyer, markAsUnreadSeller } from '../redux/actions/trades';
import ChatDetails from './ChatDetails';
import Button from '../shared/ui/Buttons';
import ColoredText from '../shared/ui/ColoredText';
import { ITradesContext, TradesContext } from '../pages/Trades/TradesProvider';
import { RootState } from '../redux/reducers';
import { Message } from '../redux/reducers/messages';
import MessageBox from './MessageBox';
import { addMessage } from '../redux/actions/messages';

interface ChatProps {
  item: TradeItem;
}

export default function Chat({ item }: ChatProps) {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
  const { isSeller } = useContext<ITradesContext>(TradesContext);
  const chatRef = createRef<HTMLDivElement>();
  const inputRef = createRef<HTMLInputElement>()
  const messages = useSelector(
    (state: RootState) => state.messages.filter(({ tradeId }: Message) => tradeId === item.id),
    shallowEqual,
  );
  
  const scollToBottom = () => {
    chatRef?.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }
  const onDeleteClicked = () => {
    dispatch(
      deleteTrade(item.id)
    );
  };
  const onShowDetailClicked = () => {
    setShowDetails(!showDetails);
  };

  const onMessageSent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = inputRef.current?.value || '';
    const authorId = !isSeller ? 1 : null;
    dispatch(
      addMessage(text, authorId, item.id)
    );
    dispatch(
      isSeller ? markAsUnreadBuyer(item.id) : markAsUnreadSeller(item.id)
    );
    if (inputRef && inputRef.current) {
      inputRef.current.value = '';
    }
  } 

  useEffect(() => {
    dispatch(isSeller ? markAsReadSeller(item.id) : markAsReadBuyer(item.id));
  }, [item.id, isSeller, dispatch]);

  useEffect(scollToBottom, [item.id, messages]);

  return (
    <ChatWrapper>
      <Column size={2}>
        <Content>
          <ChatHeader>
            <ChatIconContent>
              <button type="button" onClick={onDeleteClicked}>D</button>
            </ChatIconContent>
            <ChatDescription>
              <ChatDescriptionTitle>{item.paymentMethod}</ChatDescriptionTitle>
              <br/>
              <ChatDescriptionSubtitle>
                <span className="username">{item.buyer.username}</span>
                <ColoredText success>
                  {item.buyer.positive > 0 ? '+' : ''}{item.buyer.positive}
                </ColoredText>/ 
                <ColoredText danger>
                  {item.buyer.negative > 0 ? '-' : ''}{item.buyer.negative}
                </ColoredText>
              </ChatDescriptionSubtitle>
            </ChatDescription>
            <ChatIconContent>
              <button className="toggle-detials" type="button" onClick={onShowDetailClicked}>{'<<'}</button>
            </ChatIconContent>
          </ChatHeader>
          <ChatBody ref={chatRef}>
            {messages.map((message: Message) => {
              return <MessageBox key={message.id} message={message} />
            })}
          </ChatBody>
          <ChatInputBox onSubmit={onMessageSent}>
            <input placeholder="Type your message..." ref={inputRef} />
            <Button type="submit" primary>Send</Button>
          </ChatInputBox>
        </Content>      
      </Column>

      <DetailedColumn open={showDetails}>
        <span className="close">
          <Button onClick={onShowDetailClicked}>X</Button>
        </span>
        <ChatDetails trade={item} />
      </DetailedColumn>
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

interface ColumnProps {
  size?: number;
}

const Column = styled.div<ColumnProps>`
  display: flex;
  flex: ${props => props.size || 1};
`;

interface DetailedColumnProps {
  open: boolean;
}

const DetailedColumn = styled.div<DetailedColumnProps>`
  flex: 1;
  .close {
    display: none;
  }
  @media all and (max-width: 500px) {
    flex: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    background: #fff;
    z-index: 1;
    padding-top: 40px;
    width: 100%;
    height: 100vh;
    .close {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
`;

const Content = styled.div`
  background: ${props => props.theme.chatBackground};
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;


const ChatHeader = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.grey};
`;


const ChatDescription = styled.div`
  flex: 1;
  text-align: center;
  padding-bottom: 10px;
`;

const ChatIconContent = styled.div`
  display: flex;
  flex: 0 0 30px;
  justify-content: center;
  align-items: center;
  .toggle-detials {
    display: none;
    @media all and (max-width: 500px) {
      display: inline-block;
    }
  }
  
`;

const ChatDescriptionTitle = styled.span`
  color: ${props => props.theme.black};
  padding-bottom: 10px;
  font-weight: bold;
  display: inline-block;
`;

const ChatDescriptionSubtitle = styled.span`
  color: ${props => props.theme.grey};
  span.username {
    margin-right: 5px;
  }
`;

const ChatBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const ChatInputBox = styled.form`
  padding-top: 10px;
  display: flex;
  input {
    border: 0;
    flex: 1;
    margin: 0 10px;
  }
`;
