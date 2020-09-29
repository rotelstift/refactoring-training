const statement = require("./statement");
const plays = require("./plays.json");
const invoices = require("./invoices.json");

test('請求文が正しく表示される', () => {
    expect(statement(invoices[0], plays)).toEqual('Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n');
});