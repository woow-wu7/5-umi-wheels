import React from 'react';
import Avatar from './Avatar';
import Notice from './Notice';

export const GlobalHeaderRight: React.FC = () => {
  return (
    <>
      <Notice />
      <Avatar />
    </>
  );
};
