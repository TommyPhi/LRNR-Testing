const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

it("Gets the generatequiz endpoint", async () => {
    const res = await request.get("/api/generatequiz?topic=math&expertise=novice&questionNum=10&questionStyle=friendly");

    expect(res.status).toBe(200);
}, 30000)

it("Tests to see if the generated quiz has 10 questions, as specified in the url", async () => {
    const res = await request.get("/api/generatequiz?topic=math&expertise=novice&questionNum=10&questionStyle=friendly");

    expect(JSON.parse(res.text).length).toBe(10);
}, 30000)

it('Gets the scorequestion endpoint', async () => {
    const res = await request.get("/api/scorequestion?question=What is 2+2&answer=4&questionStyle=friendly&expertise=novice");

    expect(res.status).toBe(200);
}, 30000);

it('Tests to see if the scorequestion endpoint contains the result and explanation keys', async () => {
    const res = await request.get("/api/scorequestion?question=what%20color%20is%20an%20orange&answer=black&questionStyle=king%20charles%20iii&expertise=novice");

    expect(JSON.parse(res.text)).toHaveProperty('result');
    expect(JSON.parse(res.text)).toHaveProperty('explanation');
}, 30000)