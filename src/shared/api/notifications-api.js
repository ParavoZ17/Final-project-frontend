import instance from "./instance"; 

export const fetchNotifications = (limit = 20, skip = 0, token) =>
  instance.get("/notifications", {
    params: { limit, skip },headers: {
    "Authorization" : `Bearer ${token}`,
  }
  });

export const markNotificationRead = (id,token) =>
  instance.patch(`/notifications/${id}/read`, {
  headers: {
    "Authorization" : `Bearer ${token}`,
  }
});
