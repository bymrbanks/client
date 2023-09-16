import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { BudgetProvider } from "~/context/budget";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import "~/scss/main.scss";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <BudgetProvider>
        <Component {...pageProps} />
      </BudgetProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
