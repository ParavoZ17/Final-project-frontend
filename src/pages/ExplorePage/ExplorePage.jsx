import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostCard from "../../shared/components/Post/PostCard.jsx";
import style from "./ExplorePage.module.css";
import {fetchAllPosts} from "../../store/posts/postsOperations.js";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const {posts, loading} = useSelector((state) => state.posts);


  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div className={style.page}>
      <div className={style.grid}>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
export default ExplorePage;