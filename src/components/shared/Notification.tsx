import React from 'react';
import { createPortal } from 'react-dom';

export enum NotificationType {
  ERROR = 'danger',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = "warning",
};

interface INotification {
  id: number;
  type: NotificationType;
  content: string;
}

interface INotificationProps {
  notification: INotification;
}

interface INotificationsContainerProps {
  notifications: INotification[];
}

const Notification: React.FC<INotificationProps> = ({ notification }) => {
  const { removeNotification } = useNotification();

  React.useEffect(() => {
    const duration = (notification.type === NotificationType.ERROR || notification.type === NotificationType.WARNING ? 5000 : 3000);
    const timer = setTimeout(() => {
      removeNotification(notification.id);
    }, duration);
    return () => clearTimeout(timer);
  }, [notification, removeNotification]);

  return (
    <div
      className={`alert alert-${notification.type} show fade`}
      title={`${notification.type} notification`}
      role="alert">
      {notification.content}
    </div>
  );
}

const NotificationsContainer: React.FC<INotificationsContainerProps> = ({ notifications }) => {
  return createPortal(
    <div style={{
      position: 'fixed',
      zIndex: 2,
      bottom: '30px',
      right: '25px'
    }}>
      {
        notifications.map((notification: INotification) =>
          <Notification key={notification.id} notification={notification} />)
      }
    </div>, document.body
  )
};

interface INotificationContext {
  addNotification: (type: NotificationType, content: string) => number;
  removeNotification: (id: number) => void;
}

export const NotificationContext = React.createContext<INotificationContext>({
  addNotification: (_type: NotificationType, _content: string) => 0,
  removeNotification: (_id: number) => null
})

export const NotificationProvider: React.FC = ({ children }) => {
  const [notifications, setNotifications] = React.useState<INotification[]>([]);

  const addNotification = React.useCallback((type: NotificationType, content: string): number => {
    const id = Date.now();
    setNotifications((notifications: INotification[]) => [
      ...notifications,
      {
        id, type, content
      }
    ]);
    return id;
  }, [setNotifications]);

  const removeNotification = React.useCallback((id: number) => {
    setNotifications((notifications: INotification[]) =>
      notifications.filter((item: INotification) => item.id !== id)
    );
  }, [setNotifications]);

  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification }}>
      <NotificationsContainer notifications={notifications} />
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const notificationHelpers = React.useContext(NotificationContext);
  return notificationHelpers;
}