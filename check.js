var Jade = require("./mode-jade").JadeHighlightRules;

module.exports = function(info) {
    var text = info.inputs.text;
    var tokens = JadeHighlightRules();

    try {
        new .Parser(tokens);
        return [];
    } catch (e) {
        return [{
            row: e.line - 1,
            column: null,
            text: e.message.charAt(0).toUpperCase() + e.message.substring(1),
            type: "error"
        }];
    }
};