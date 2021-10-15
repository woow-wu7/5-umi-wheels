// src/access.ts
const access = function (initialState: any) {
  const { name } = initialState;

  return {
    canViewNumber: name === 'woow_wu7',
  };
};

export default access;
