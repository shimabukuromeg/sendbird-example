import SendBird from 'sendbird';

export const sb =
  process.env.NEXT_PUBLIC_YOUR_APP_ID !== undefined
    ? new SendBird({
        appId: process.env.NEXT_PUBLIC_YOUR_APP_ID,
        localCacheEnabled: true,
      })
    : undefined;
