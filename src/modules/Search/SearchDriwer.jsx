import DrawerShell from "../../shared/components/Modal/DrawerShell";
import SearchPanel from "./SearchPanel";

const SearchDrawer =  ({ open, onClose }) => {
  return (
    <DrawerShell open={open} onClose={onClose} title="Search">
      <SearchPanel />
    </DrawerShell>
  );
}

export default SearchDrawer;