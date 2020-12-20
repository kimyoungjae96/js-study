const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어 기본 구조
  console.log(action);
  const result = next(action);
  return result;
};

export default loggerMiddleware();
