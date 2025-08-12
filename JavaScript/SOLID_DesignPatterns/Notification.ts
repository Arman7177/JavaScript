interface INotification {
    sendMessage(message: string): void;
}

class EmailNotification implements INotification {
    sendMessage(message: string): void {
        console.log(`Via Email: -> ${message}`);
    }
}
class SMSNotification implements INotification {
    sendMessage(message: string): void {
        console.log(`Via SMS: -> ${message}`);
    }
}
class SlackNotification implements INotification {
    sendMessage(message: string): void {
        console.log(`Via Slack: -> ${message}`);
    }
}

class NotificationFactory {
    static create(type: string): INotification {
       if(type.toLowerCase() == 'email') {
            return new EmailNotification();
       } else if (type.toLowerCase() == 'sms') {
            return new SMSNotification();
       }else if (type.toLowerCase() == 'slack') {
            return new SlackNotification();
       } else {
            throw new Error('Unknown Notification type');
       }
    }
}

let customer = NotificationFactory.create('slack');
customer.sendMessage('Welcome to our platform')