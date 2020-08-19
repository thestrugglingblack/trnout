
const baseUrl = `http://localhost:6543`;
const request = async (url, options) => {
   const response = await fetch(baseUrl+ url, options);
   return response.json();
}

export default request;
