const { Vec, getTimeStr } = require("./utils");

describe("Fonctionnel", () => {
    test("Vec est défini", () => {
        expect(Vec).toBeDefined();
    });

    test("Vec a les propriétés x et y", () => {
        const v = new Vec(1, 2);
        expect(v).toHaveProperty("x");
        expect(v).toHaveProperty("y");
    });

    test("getTimeStr est bien défini", () => {
        expect(getTimeStr).toBeDefined();
    });
});
