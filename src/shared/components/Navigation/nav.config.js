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
 UserAvatar
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
  action: "post-modal", 
  label: "Create",
  icon: CreatePostIcon,
  iconActive: CreatePostIcon,
},
  {
    type: "route",
    to: "/me",
    label: "Profile",
    icon: UserAvatar,
    iconActive: UserAvatar,
  },
];