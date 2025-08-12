interface IAlert {
    send(message: string): void;
}


class EmailAlert implements IAlert {
    send(message: string): void {
        console.log(`Email: ${message}`);
    }
}

class SMSAlert implements IAlert {
    send(message: string): void {
        console.log(`SMS: ${message}`);
    }
}

class SlackAlert implements IAlert {
    send(message: string): void {
        console.log(`Slack: ${message}`);
    }
}


class HealthMonitor {
    private alertChannels: IAlert[];

    constructor(alertChannels: IAlert[]) {
        this.alertChannels = alertChannels;
    }

    
    notify(message: string): void {
        this.alertChannels.forEach(alert => alert.send(message));
    }
}


const monitor = new HealthMonitor([
    new EmailAlert(),
    new SMSAlert(),
    new SlackAlert()
]);

monitor.notify("Server down");
