import PostCard from "../../shared/components/PostCard/PostCard";
import style from "./Home.module.css";

const POSTS = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  username: "sashaa",
  time: "2 week",
  image: "https://picsum.photos/seed/home-" + i + "/800/800",
  likes: "101 824",
  caption: "It's golden, Ponyboy!",
  comments: 732,
}));

export default function Home() {
  return (
    <div className={style.page}>
      <div className={style.feed}>
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}