// import PostCard from "../../shared/components/PostCard/PostCard";
// import style from "./Home.module.css";

// const POSTS = Array.from({ length: 4 }).map((_, i) => ({
//   id: i,
//   username: "sashaa",
//   time: "2 week",
//   image: "https://picsum.photos/seed/home-" + i + "/800/800",
//   likes: "101 824",
//   caption: "It's golden, Ponyboy!",
//   comments: 732,
// }));

// export default function Home() {
//   return (
//     <div className={style.page}>
//       <div className={style.feed}>
//         {POSTS.map((post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts, fetchPostById } from "../../store/posts/postsOperations";
import LoadingOverlay from "../../shared/components/Loading/LoadingOverlay";
import PostCard from "../../shared/components/PostCard/PostCard";

import style from "./Home.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const handleClickPost = (postId) => {
    dispatch(fetchPostById(postId));
    // тут пізніше відкриємо модалку
  };
console.log(posts)
  return (
    <div className={style.feed}>
      <LoadingOverlay open={loading} />

      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          onClick={() => handleClickPost(post._id)}
        />
      ))}
    </div>
  );
};

export default HomePage;



