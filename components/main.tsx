import React from 'react';

type MainProps = {
  children: React.ReactNode;
}

const Main = ({children} : MainProps) => {
  return (
    <main className="flex items-center justify-center py-6 h-full">
      {children}
    </main>
  );
};

export default Main;