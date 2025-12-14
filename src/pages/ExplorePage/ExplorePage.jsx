import ExploreCard from "../../shared/components/ExploreCard/ExploreCard";
import style from "./ExplorePage.module.css";

const EXPLORE_POSTS = [
  {
    id: 1,
    image: "https://picsum.photos/id/1015/800/1200",
    likes: "52k",
    comments: "4,213",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1016/800/800",
    likes: "18k",
    comments: "912",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1018/800/800",
    likes: "9k",
    comments: "201",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/1020/800/1200",
    likes: "41k",
    comments: "3,002",
  },
  {
    id: 5,
    image: "https://picsum.photos/id/1024/800/800",
    likes: "22k",
    comments: "1,104",
  },
  {
    id: 6,
    image: "https://picsum.photos/id/1035/800/800",
    likes: "6k",
    comments: "88",
  },
  {
    id: 7,
    image: "https://picsum.photos/id/1015/800/1200",
    likes: "52k",
    comments: "4,213",
  },
  {
    id: 8,
    image: "https://picsum.photos/id/1016/800/800",
    likes: "18k",
    comments: "912",
  },
  {
    id: 9,
    image: "https://picsum.photos/id/1018/800/800",
    likes: "9k",
    comments: "201",
  },
  {
    id: 10,
    image: "https://picsum.photos/id/1020/800/1200",
    likes: "41k",
    comments: "3,002",
  },
  {
    id: 11,
    image: "https://picsum.photos/id/1024/800/800",
    likes: "22k",
    comments: "1,104",
  },
  {
    id: 12,
    image: "https://picsum.photos/id/1035/800/800",
    likes: "6k",
    comments: "88",
  },
  {
    id: 13,
    image: "https://picsum.photos/id/1015/800/1200",
    likes: "52k",
    comments: "4,213",
  },
  {
    id: 14,
    image: "https://picsum.photos/id/1016/800/800",
    likes: "18k",
    comments: "912",
  },
  {
    id: 15,
    image: "https://picsum.photos/id/1018/800/800",
    likes: "9k",
    comments: "201",
  },
  {
    id: 16,
    image: "https://picsum.photos/id/1020/800/1200",
    likes: "41k",
    comments: "3,002",
  },
  {
    id: 17,
    image: "https://picsum.photos/id/1024/800/800",
    likes: "22k",
    comments: "1,104",
  },
  {
    id: 18,
    image: "https://picsum.photos/id/1035/800/800",
    likes: "6k",
    comments: "88",
  },
];

const ExplorePage = ({ posts }) => {

  return (
    <div className={style.page}>
      <div className={style.grid}>
        {EXPLORE_POSTS.map((p) => (
          <ExploreCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
export default ExplorePage;