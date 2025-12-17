import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../../store/posts/postsOperations";
import LoadingOverlay from "../../shared/components/Loading/LoadingOverlay";
import HomePostCard from "../../shared/components/Post/HomePostCard";

import style from "./Home.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const {posts, loading} = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div className={style.page}>
      <div className={style.feed}>
        <LoadingOverlay open={loading}/>

        {posts.map((post) => (
          <HomePostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;