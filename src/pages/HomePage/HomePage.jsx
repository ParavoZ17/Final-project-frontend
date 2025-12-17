
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts, fetchPostById} from "../../store/posts/postsOperations";
import LoadingOverlay from "../../shared/components/Loading/LoadingOverlay";
import HomePostCard from "../../shared/components/Post/HomePostCard";

import style from "./Home.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const {posts, loading} = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const handleClickPost = (postId) => {
    dispatch(fetchPostById(postId));
   
  };

  return (
    <div className={style.page}>
      <div className={style.feed}>
        <LoadingOverlay open={loading}/>

        {posts.map((post) => (
          <HomePostCard
            key={post.id}
            post={post}
            onClick={() => handleClickPost(post._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;


