const { sumMultiples, isValidDNA, isItPrime, createMatrix, areWeCovered } = require("../challenges/week9");


//TEST Q1
describe("sumMultiples", () => {

    test("returns the sum of any numbers that are multiples of 5 or 8", () => {
        expect(sumMultiples([1, 3, 5, 18])).toBe(26);
    });

    test("works with zeros and decimals in the array", () => {
        expect(sumMultiples([0, 9, 2, 8.4, 6])).toBe(15);
    });

    test("returns zero if there are no multiples in the array", () => {
        expect(sumMultiples([4, 8, 22, 2, 11])).toBe(0);
    });
});

//TEST Q2
describe("isValidDNA", () => {

    test("returns true if string contains only C,G,T and A", () => {
        expect(isValidDNA(["GCTATATGCA"])).toBe(true);
    });

    test("returns false if receives a mix of DNA and other letters", () => {
        expect(isValidDNA(["CGXD"])).toBe(false);
    });

    test("returns false if array is empty", () => {
        expect(isValidDNA([])).toBe(false);
    });

    test("works with lower case input", () => {
        expect(isValidDNA("cgtaattg")).toBe(true);
    });

});

//TEST Q3

//TEST Q4

describe("isItPrime", () => {

    test("returns true if number only divies by one and itself", () => {
        expect(isItPrime(7)).toBe(true);
    });

    test("returns false if number can be dividen by numbers other than itself and one", () => {
        expect(isItPrime(12)).toBe(false);
    });

    test("works for large numbers", () => {
        expect(isItPrime(4093)).toBe(true);
    });

});

//TEST Q5

describe("createMatrix", () => {

    test("returns a matrix of the fill, with the number of arrays and the number of items in the arrays being equal to n", () => {
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
    });

    test("works if fill is a number type", () => {
        expect(createMatrix(6, 12)).toEqual([[12, 12, 12, 12, 12, 12], [12, 12, 12, 12, 12, 12], [12, 12, 12, 12, 12, 12], [12, 12, 12, 12, 12, 12], [12, 12, 12, 12, 12, 12], [12, 12, 12, 12, 12, 12]]);
    });

});

//TEST Q6

describe("areWeCovered", () => {

    test("returns false if no staff are scheduled", () => {
        expect(areWeCovered([], "monday")).toBe(false);
        expect(areWeCovered([], "tuesday")).toBe(false);
        expect(areWeCovered([], "wednesday")).toBe(false);
        expect(areWeCovered([], "thursday")).toBe(false);
        expect(areWeCovered([], "friday")).toBe(false);
        expect(areWeCovered([], "saturday")).toBe(false);
        expect(areWeCovered([], "sunday")).toBe(false);
    });

    test("if less than three staff are scheduled, returns false", () => {
        const staff = [
            { name: "Helen", rota: ["friday", "saturday", "sunday"] },
            { name: "Stef", rota: ["monday", "tuesday", "wednesday", "thursday"] },
            { name: "Hannah", rota: ["friday", "saturday", "sunday"] },
            { name: "Charl", rota: ["monday", "tuesday", "wednesday", "thursday"] },
            { name: "Lynds", rota: ["friday", "saturday"] },
            { name: "Bex", rota: ["friday", "saturday", "sunday"] }
        ]
        expect(areWeCovered(staff, "monday")).toBe(false);
    });

    test("if three staff are scheduled, returns true", () => {
        const staff = [
            { name: "Helen", rota: ["friday", "saturday", "sunday"] },
            { name: "Stef", rota: ["monday", "tuesday", "wednesday", "thursday"] },
            { name: "Hannah", rota: ["friday", "saturday", "sunday"] },
            { name: "Charl", rota: ["monday", "tuesday", "wednesday", "thursday"] },
            { name: "Lynds", rota: ["friday", "saturday"] },
            { name: "Bex", rota: ["saturday", "sunday"] }
        ]
        expect(areWeCovered(staff, "friday")).toBe(true);
    });


    test("if more than three staff are scheduled, returns true", () => {
        const staff = [
            { name: "Helen", rota: ["friday", "saturday", "sunday"] },
            { name: "Stef", rota: ["monday", "tuesday", "wednesday", "thursday"] },
            { name: "Hannah", rota: ["friday", "saturday", "sunday"] },
            { name: "Charl", rota: ["monday", "tuesday", "wednesday", "thursday"] },
            { name: "Lynds", rota: ["friday", "saturday"] },
            { name: "Bex", rota: ["saturday", "sunday"] }
        ]
        expect(areWeCovered(staff, "saturday")).toBe(true);
    });


})