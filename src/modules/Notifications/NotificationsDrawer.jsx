import DrawerShell from "../../shared/components/ModalMenu/DrawerShell";
import NotificationsPanel from "./NotificationsPanel";

const NotificationsDrawer = ({open, onClose}) => {
  return (
    <DrawerShell open={open} onClose={onClose} title="Notifications">
      <NotificationsPanel/>
    </DrawerShell>
  );
}

export default NotificationsDrawer;