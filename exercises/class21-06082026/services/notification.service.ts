import { INotification } from "../interfaces/INotification";

export class NotificationService {
  public processNotifications(notifications: INotification[]): void {
    console.log("Iniciando proceso en bloqueos...");
    for (const notification of notifications) {
      notification.send()
    }

    console.log("...Finalizacion del proceso")
  }
}