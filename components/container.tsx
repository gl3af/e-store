import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
}
const Container = ({children}: ContainerProps) => {
  return (
    <div className="container h-full">
      {children}
    </div>
  );
};

export default Container;