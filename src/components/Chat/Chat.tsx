import { App as SendBirdApp } from 'sendbird-uikit';
import styled from 'styled-components';

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

const Chat = () => {
  if (
    process.env.NEXT_PUBLIC_YOUR_APP_ID === undefined ||
    process.env.NEXT_PUBLIC_USER_ID === undefined
  ) {
    return <div>Can not read env info</div>;
  }
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