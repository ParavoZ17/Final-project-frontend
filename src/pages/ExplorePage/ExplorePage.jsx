import PostCard from "../../shared/components/Post/PostCard.jsx";
import style from "./ExplorePage.module.css";

const EXPLORE_POSTS = [
  {
    id: 1,
    images: "https://picsum.photos/id/1015/800/1200",
    likesCount: "52k",
    commentsCount: "4,213",
  },
  {
    id: 2,
    images: "https://picsum.photos/id/1016/800/800",
    likesCount: "18k",
    commentsCount: "912",
  },
  {
    id: 3,
    images: "https://picsum.photos/id/1018/800/800",
    likesCount: "9k",
    commentsCount: "201",
  },
  {
    id: 4,
    images: "https://picsum.photos/id/1020/800/1200",
    likesCount: "41k",
    commentsCount: "3,002",
  },
  {
    id: 5,
    images: "https://picsum.photos/id/1024/800/800",
    likesCount: "22k",
    commentsCount: "1,104",
  },
  {
    id: 6,
    images: "https://picsum.photos/id/1035/800/800",
    likesCount: "6k",
    commentsCount: "88",
  },
  {
    id: 7,
    images: "https://picsum.photos/id/1015/800/1200",
    likesCount: "52k",
    commentsCount: "4,213",
  },
  {
    id: 8,
    images: "https://picsum.photos/id/1016/800/800",
    likesCount: "18k",
    commentsCount: "912",
  },
  {
    id: 9,
    images: "https://picsum.photos/id/1018/800/800",
    likesCount: "9k",
    commentsCount: "201",
  },
  {
    id: 10,
    images: "https://picsum.photos/id/1020/800/1200",
    likesCount: "41k",
    commentsCount: "3,002",
  },
  {
    id: 11,
    images: "https://picsum.photos/id/1024/800/800",
    likesCount: "22k",
    commentsCount: "1,104",
  },
  {
    id: 12,
    images: "https://picsum.photos/id/1035/800/800",
    likesCount: "6k",
    commentsCount: "88",
  },
  {
    id: 13,
    images: "https://picsum.photos/id/1015/800/1200",
    likesCount: "52k",
    commentsCount: "4,213",
  },
  {
    id: 14,
    images: "https://picsum.photos/id/1016/800/800",
    likesCount: "18k",
    commentsCount: "912",
  },
  {
    id: 15,
    images: "https://picsum.photos/id/1018/800/800",
    likesCount: "9k",
    commentsCount: "201",
  },
  {
    id: 16,
    images: "https://picsum.photos/id/1020/800/1200",
    likesCount: "41k",
    commentsCount: "3,002",
  },
  {
    id: 17,
    images: "https://picsum.photos/id/1024/800/800",
    likesCount: "22k",
    commentsCount: "1,104",
  },
  {
    id: 18,
    images: "https://picsum.photos/id/1035/800/800",
    likesCount: "6k",
    commentsCount: "88",
  },
];

const ExplorePage = ({ posts }) => {

  return (
    <div className={style.page}>
      <div className={style.grid}>
        {EXPLORE_POSTS.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
export default ExplorePage;