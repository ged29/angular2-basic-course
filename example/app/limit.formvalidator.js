"use strict";
var LimitValidator = (function () {
    function LimitValidator() {
    }
    LimitValidator.limit = function (limit) {
        return function (ctrl) {
            var value = Number(ctrl.value);
            return !isNaN(value) && value > limit
                ? { "limit": { "requiredLimit": limit, actualValue: value } }
                : null;
        };
    };
    return LimitValidator;
}());
exports.LimitValidator = LimitValidator;
//# sourceMappingURL=limit.formvalidator.js.map