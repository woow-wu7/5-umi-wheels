import { request } from 'umi';

export const login = (data: any) => {
  return request(`/api/login`, {
    method: 'POST',
    data,
    skipErrorHandler: false,
  });
};

export const fetchError = () => {
  return request(`/api/img/mom2018%20(173).jpg2`, {
    method: 'GET',
    skipErrorHandler: false,
  });
};
