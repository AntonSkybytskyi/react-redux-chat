import { MessagesActionType, ADD_MESSAGE } from '../types/messages';

export interface Message {
  id: number;
  text: string;
  authorId: number | null;
  author: {
    username: string;
    avatar?: string;
  },
  created: number;
  tradeId: string;
}

type MessagesState = Message[];
const defaultBuyer = {
  username: 'John Doe',
};
const defaultSeller = {
  username: 'Paxful',
};

const randomTextPrimary = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const randomTexAccent = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English`;

// 06/12/2020 @ 2:30pm (UTC)
const randomTime = 1591972200;
// 06/12/2020 @ 3:00pm (UTC)
const randomTimeAccent = 1591974000;

const initialState: MessagesState = [{
  id: 1,
  text: randomTextPrimary,
  authorId: 1,
  author: defaultBuyer,
  tradeId: 'trade-1',
  created: randomTime,
}, {
  id: 2,
  text: randomTexAccent,
  authorId: null,
  author: defaultSeller,
  tradeId: 'trade-1',
  created: randomTimeAccent,
}, {
  id: 3,
  text: randomTexAccent,
  authorId: null,
  author: defaultSeller,
  tradeId: 'trade-1',
  created: randomTimeAccent,
}, {
  id: 4,
  text: randomTexAccent,
  authorId: null,
  author: defaultSeller,
  tradeId: 'trade-1',
  created: randomTimeAccent,
}, {
  id: 5,
  text: randomTextPrimary,
  authorId: 1,
  author: defaultBuyer,
  tradeId: 'trade-1',
  created: randomTime,
}, {
  id: 6,
  text: randomTextPrimary,
  authorId: 1,
  author: defaultBuyer,
  tradeId: 'trade-2',
  created: randomTime,
}, {
  id: 7,
  text: randomTextPrimary,
  authorId: 1,
  author: defaultBuyer,
  tradeId: 'trade-2',
  created: randomTime,
}, {
  id: 8,
  text: randomTextPrimary,
  authorId: null,
  author: defaultSeller,
  tradeId: 'trade-2',
  created: randomTime,
}];
export default (state: MessagesState = initialState, action: MessagesActionType) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return [
        ...state,
        {
          id: new Date().getTime(),
          text: action.payload.text,
          authorId: action.payload.authorId,
          author: action.payload.authorId ? defaultBuyer : defaultSeller,
          tradeId: action.payload.tradeId,
          created: new Date().getTime(),
        }
      ]
    }
    default:
      return state;
  }
}