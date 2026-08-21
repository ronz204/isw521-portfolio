import { EmailNotification } from "./classes/EmailNotification";
import { SmsNotification } from "./classes/SmsNotification";
import { NotificationService } from "./services/NotificationService";
import { INotification } from "./interfaces/INotification";

const email = new EmailNotification("prueba@gmail.com", "Este es un mensaje de prueba", "Probando notificacion")
const sms = new SmsNotification("123456789", "Hola, tú código de seguridad es: 8888")

const queue: INotification[] = [email, sms];

const service = new NotificationService()
service.processNotifications(queue);