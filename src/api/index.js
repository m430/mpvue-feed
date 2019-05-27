import OniApi from 'oni-api-creator';

OniApi.interceptors.response.use((res) => {
  return res.data
});

const api = {
}

OniApi.use(api);

export default api;