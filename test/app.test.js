const request = require("supertest");
process.env.ENVIROMENT = "local";
const createServer = require("../src/app.js");

describe("get starwars", () => {
  test("should get people", async () => {
    const result = await request(createServer())
      .get("/api/starwars")
      .expect(200);
    expect(JSON.parse(result.text).status).toEqual(true);
  });
});
