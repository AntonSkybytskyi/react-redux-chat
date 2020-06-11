import React, { useState } from 'react'
import styled from 'styled-components'
import { TradeItem } from '../redux/reducers/trades';
import { useDispatch } from 'react-redux';
import { deleteTrade } from '../redux/actions/trades';
import ChatDetails from './ChatDetails';
import { Sidebar } from '../shared/ui/Sidebar';
import { Button } from '../shared/ui/Buttons';

interface ChatProps {
  item: TradeItem;
}

export default function Chat({ item }: ChatProps) {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);

  const onDeleteClicked = () => {
    dispatch(
      deleteTrade(item.id)
    );
  };
  const onShowDetailClicked = () => {
    setShowDetails(!showDetails);
  };
  console.log('showDetails', showDetails);
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
                <span className="username">{item.buyer.name}</span>
                <Reputation success value={item.buyer.positive}>
                  {item.buyer.positive > 0 ? '+' : ''}{item.buyer.positive}
                </Reputation>/ 
                <Reputation danger value={item.buyer.negative}>
                  {item.buyer.negative > 0 ? '-' : ''}{item.buyer.negative}
                </Reputation>
              </ChatDescriptionSubtitle>
            </ChatDescription>
            <ChatIconContent>
              <button className="toggle-detials" type="button" onClick={onShowDetailClicked}>{'<<'}</button>
            </ChatIconContent>
          </ChatHeader>
          Chat works {item.id}!
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
  height: 100%;
`;


const ChatHeader = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.grey};
`;

interface ReputationProps {
  success?: boolean;
  danger?: boolean;
  value: number;
}
const Reputation = styled.span<ReputationProps>`
  color: ${props => (props.success && props.value > 0) ? props.theme.green : (props.danger && props.value > 0) ? props.theme.danger : props.theme.grey };
`

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