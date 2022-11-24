"use client";

/* import { SessionProvider, SessionProviderProps } from "next-auth/react";

export default function ClientSessionProvider(props: SessionProviderProps) {
  return <SessionProvider {...props} />;
}
 */

import { SessionProvider } from "next-auth/react";
import React from "react";
interface session {
  children: React.ReactNode;
}
const SessionProviderC = ({ children }: session) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default SessionProviderC;
