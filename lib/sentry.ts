import * as Sentry from "@sentry/node";
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1,
  debug: false,
});
type User = {
  name: string;
  email: string;
  message: string;
};
export const sendUserInfo = async (user: User) => {
  Sentry.captureMessage(user.message, {
    extra: {
      name: user.name,
      email: user.email,
      message: user.message,
    },
  });
  await Sentry.flush(2000);
  return;
};
