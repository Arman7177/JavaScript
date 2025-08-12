var EmailAlert = /** @class */ (function () {
    function EmailAlert() {
    }
    EmailAlert.prototype.send = function (message) {
        console.log("Email: ".concat(message));
    };
    return EmailAlert;
}());
var SMSAlert = /** @class */ (function () {
    function SMSAlert() {
    }
    SMSAlert.prototype.send = function (message) {
        console.log("SMS: ".concat(message));
    };
    return SMSAlert;
}());
var SlackAlert = /** @class */ (function () {
    function SlackAlert() {
    }
    SlackAlert.prototype.send = function (message) {
        console.log("Slack: ".concat(message));
    };
    return SlackAlert;
}());
var HealthMonitor = /** @class */ (function () {
    function HealthMonitor(alertChannels) {
        this.alertChannels = alertChannels;
    }
    HealthMonitor.prototype.notify = function (message) {
        this.alertChannels.forEach(function (alert) { return alert.send(message); });
    };
    return HealthMonitor;
}());
var monitor = new HealthMonitor([
    new EmailAlert(),
    new SMSAlert(),
    new SlackAlert()
]);
monitor.notify("Server down");
