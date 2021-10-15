import { useState, useCallback } from 'react';

export default function useAuthModel() {
  const [user, setUser] = useState('7777777');

  const signIn = useCallback((account, password) => {}, []);

  const signOut = useCallback(() => {}, []);

  return {
    user,
    signIn,
    signOut,
  };
}
