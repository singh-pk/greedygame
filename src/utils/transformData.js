const transformData = responseData =>
  responseData.reduce((accumulator, response) => {
    accumulator[response.id] = response;
    return accumulator;
  }, {});

export default transformData;
