import DrawerShell from "../../shared/components/ModalMenu/DrawerShell";
import NotificationsPanel from "./NotificationsPanel";

const NotificationsDrawer = ({open, onClose}) => {
  return (
    <DrawerShell open={open} onClose={onClose} title="Notifications">
      <NotificationsPanel onClose={onClose}/>
    </DrawerShell>
  );
}

export default NotificationsDrawer;