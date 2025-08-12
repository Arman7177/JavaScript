var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.sendMessage = function (message) {
        console.log("Via Email: -> ".concat(message));
    };
    return EmailNotification;
}());
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.sendMessage = function (message) {
        console.log("Via SMS: -> ".concat(message));
    };
    return SMSNotification;
}());
var SlackNotification = /** @class */ (function () {
    function SlackNotification() {
    }
    SlackNotification.prototype.sendMessage = function (message) {
        console.log("Via Slack: -> ".concat(message));
    };
    return SlackNotification;
}());
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.create = function (type) {
        if (type.toLowerCase() == 'email') {
            return new EmailNotification();
        }
        else if (type.toLowerCase() == 'sms') {
            return new SMSNotification();
        }
        else if (type.toLowerCase() == 'slack') {
            return new SlackNotification();
        }
        else {
            throw new Error('Unknown Notification type');
        }
    };
    return NotificationFactory;
}());
var customer = NotificationFactory.create('slack');
customer.sendMessage('Welcome to our platform');
