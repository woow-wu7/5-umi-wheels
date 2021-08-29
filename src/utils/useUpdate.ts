import { useState, useCallback } from 'react';

const useUpdate = () => {
  const [, setUpdate] = useState({});

  return useCallback(() => setUpdate({}), []);
};

export { useUpdate };
