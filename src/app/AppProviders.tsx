import { ReactNode } from 'react';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  // هنا سنضع ThemeProvider و AuthProvider لاحقاً
  return <>{children}</>;
};