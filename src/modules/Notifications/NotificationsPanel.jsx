import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NotificationsPanel.module.css";

import {
  getNotifications,
  readNotification,
} from "../../store/notifications/notificationOperations";

import {
  selectNotifications,
  selectNotificationsLoading,
} from "../../store/notifications/notificationSelectors";

const getTextByType = (type) => {
  switch (type) {
    case "like":
      return "liked your post.";
    case "comment":
      return "commented on your post.";
    case "follow":
      return "started following you.";
    default:
      return "";
  }
};

const NotificationsPanel = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotifications);
  const isLoading = useSelector(selectNotificationsLoading);

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  if (isLoading) {
    return <p className={styles.title}>Loading...</p>;
  }

  if (!notifications.length) {
    return <p className={styles.title}>No notifications</p>;
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>New</p>

      <ul className={styles.list}>
        {notifications.map((item) => (
          <li
            key={item.id}
            className={`${styles.item} ${!item.read ? styles.unread : ""}`}
            onClick={() => {
              if (!item.read) {
                dispatch(readNotification(item.id));
              }
            }}
          >
            <img
              src={item.sender.avatar}
              alt={item.sender.username}
              className={styles.avatar}
            />

            <div className={styles.content}>
              <p className={styles.text}>
                <span className={styles.username}>{item.sender.username}</span>{" "}
                <span className={styles.action}>
                  {getTextByType(item.type)}
                </span>
                <span className={styles.time}> {item.timeAgo}</span>
              </p>
            </div>

            {item.post && (
              <img
                src={item.post.preview}
                alt="post preview"
                className={styles.preview}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
