import {
  HomeIcon,
  HomeIconActive,
  SearchIcon,
  SearchIconActive,
  ExploreIcon,
  ExploreIconActive,
  MessagesIcon,
  MessagesIconActive,
  NotificationsIcon,
  NotificationsIconActive,
  CreatePostIcon,
  ProfileIcon,
  ProfileIconActive
} from '../../../assets/svg/index'

export const NAV_ITEMS = [
  {
    type: "route",
    to: "/",
    label: "Home",
    icon: HomeIcon,
    iconActive: HomeIconActive,
    end: true
  },
  {
    type: "panel",
    key: "search",
    label: "Search",
    icon: SearchIcon,
    iconActive: SearchIconActive,
    modalTitle: "Search"
  },
  {
    type: "route",
    to: "/explore",
    label: "Explore",
    icon: ExploreIcon,
    iconActive: ExploreIconActive
  },
  {
    type: "route",
    to: "/messages",
    label: "Messages",
    icon: MessagesIcon,
    iconActive: MessagesIconActive
  },
  {
    type: "panel",
    key: "notifications",
    label: "Notifications",
    icon: NotificationsIcon,
    iconActive: NotificationsIconActive,
    modalTitle: "Notifications",
  },
  {
    type: "panel",
    key: "create",
    label: "Create",
    icon: CreatePostIcon,
    iconActive: CreatePostIcon,
    modalTitle: "Create post",
  },
  {
    type: "route",
    to: "/profile",
    label: "Profile",
    icon: ProfileIcon,
    iconActive: ProfileIconActive,
  },
];
