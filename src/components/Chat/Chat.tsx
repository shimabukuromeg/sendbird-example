import { App as SendBirdApp } from 'sendbird-uikit';
import styled from 'styled-components';
import { sb } from '../../lib/sendbirdClient';

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

const Chat = () => {
  if (
    process.env.NEXT_PUBLIC_YOUR_APP_ID === undefined ||
    process.env.NEXT_PUBLIC_USER_ID === undefined ||
    sb === undefined
  ) {
    return <div>Can not read env info</div>;
  }
  sb.connect(process.env.NEXT_PUBLIC_USER_ID, (user, error) => {
    if (error) {
      console.log('接続失敗', error);
    } else {
      console.log('接続成功');
    }
  });
  return (
    <Container>
      <SendBirdApp
        appId={process.env.NEXT_PUBLIC_YOUR_APP_ID}
        userId={process.env.NEXT_PUBLIC_USER_ID}
      />
    </Container>
  );
};

export default Chat;