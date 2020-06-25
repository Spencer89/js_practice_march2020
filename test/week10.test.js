const {sumDigits, createRange, getScreentimeAlertList} = require("../challenges/week10");

//TEST Q1 - sumDigits
describe("sumDigits", () => {

    test("takes in a number and returns the sum of each digit", () => {
        expect(sumDigits(123)).toBe(6);
    });

    test("works with large numbers", () => {
        expect(sumDigits(18475636628)).toBe(56);
    });

});


//TEST Q2 - createRange
describe("createRange", () => {

    test("returns an array which begins with the start and goes incrementally by the step to the final point", () => {
        expect(createRange(6,18,4)).toBe([6,10,14,18]);
    });

    test("works with decimals", () => {
        expect(createRange(1.2,4.8,4)).toBe([1.2,2.4,3.6,4.8]);
    });

    test("works without a step, instead uses one", () => {
        expect(createRange(4,10)).toBe([4,5,6,7,8,9,10]);
    }); 

});

//TEST 3 - getScreentimeAlertList
describe("getScreentimeAlertList", () => {

    

    test("returns a list of usernames which on the given date had a total screentime higher than 100", () => {

        const users = [
            {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                                 { date: "2019-06-14", usage: { twitter: 1, instagram: 6, facebook: 61} },
                                ]
                   },
                   {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 105 } },
                                ]
                   }
        ]
        expect(getScreentimeAlertList(users, "2019-06-14")).toBe("sam_j_1898");
    });

    /*test("", () => {
        expect(getScreentimeAlertList()).toBe();
    });

    test("", () => {
        expect(getScreentimeAlertList()).toBe();
    });  */

});



//TEST 4 - hexToRGB
describe("hexToRGB", () => {

    test("returns the correct RGB numbers", () => {
        expect(("#F0F8FF")).toBe("RGB(240, 248, 255)");
    });


});


//TEST 5 - findWinner
