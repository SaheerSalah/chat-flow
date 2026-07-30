import { type ReactNode } from 'react';
import { ThemeProvider } from '../shared/context/ThemeContext';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};