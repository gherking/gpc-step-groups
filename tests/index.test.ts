import { load, process } from "gherking";
import { Document } from "gherkin-ast";
import StepGroups = require("../src/index")

const loadTestFeatureFile = async (file: String) => {
    const ast = await load(`./tests/data/${file}`);
    delete ast[0].uri;
    return ast[0];
};

describe("StepGroups", () => {
    let base: Document;

    beforeAll(async () => {
        base = await loadTestFeatureFile("input.feature");
    });

    test("should not do anything", async () => {
        const expected = await loadTestFeatureFile("output.feature");
        const actual = process(base, new StepGroups());

        expect(actual).toHaveLength(1);
        expect(actual[0]).toEqual(expected);
    });
})