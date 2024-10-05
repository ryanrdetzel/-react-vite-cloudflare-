// src/contexts/SessionContext.tsx
import { createContext } from "react";
import { UserType, CustomError } from "../types";

export interface SessionContextType {
  user: UserType | null;
  isLoading: boolean;
  isError: boolean;
  error: CustomError | null;
}

export const SessionContext = createContext<SessionContextType | undefined>(
  undefined
);
export const SessionProvider = SessionContext.Provider;
