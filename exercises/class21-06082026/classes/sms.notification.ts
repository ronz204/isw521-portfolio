import { BaseNotification } from "./BaseNotification";

export class SmsNotification extends BaseNotification {
    public send(): void {
        this.logNotification("Sms");
        console.log(`Enviando sms al numero: ${this.recipient}:`);
        console.log(`Mensaje: ${this.message}`);
    }
}