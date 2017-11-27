"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
exports.LOG_SERVICE = new core_1.OpaqueToken("logger");
exports.LOG_LEVEL = new core_1.OpaqueToken("log_level");
exports.TEST_LEVEL = new core_1.OpaqueToken("test_level");
(function (LogLevel) {
    LogLevel[LogLevel["INFO"] = 0] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
})(exports.LogLevel || (exports.LogLevel = {}));
var LogLevel = exports.LogLevel;
var LogService = (function () {
    function LogService() {
        this.minimumLevel = LogLevel.INFO;
    }
    LogService.prototype.logInfoMessage = function (message) {
        this.logMessage(LogLevel.INFO, message);
    };
    LogService.prototype.logDebugMessage = function (message) {
        this.logMessage(LogLevel.DEBUG, message);
    };
    LogService.prototype.logErrorMessage = function (message) {
        this.logMessage(LogLevel.ERROR, message);
    };
    LogService.prototype.logMessage = function (level, message) {
        if (level >= this.minimumLevel) {
            console.log("Message (" + LogLevel[level] + "): " + message);
        }
    };
    LogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LogService);
    return LogService;
}());
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map