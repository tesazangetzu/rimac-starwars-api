const serverless = require("serverless-http");
const createServer = require("./app");

const app = createServer();

if (process.env.ENVIROMENT != "local") {
  const handler = serverless(app);
  module.exports.handler = (event, context) => {
    return handler(event, context);
  };
}