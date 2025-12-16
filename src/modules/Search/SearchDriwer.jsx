import DrawerShell from "../../shared/components/ModalMenu/DrawerShell";
import SearchPanel from "./SearchPanel";

const SearchDrawer =  ({ open, onClose }) => {
  return (
    <DrawerShell open={open} onClose={onClose} title="Search">
      <SearchPanel />
    </DrawerShell>
  );
}

export default SearchDrawer;