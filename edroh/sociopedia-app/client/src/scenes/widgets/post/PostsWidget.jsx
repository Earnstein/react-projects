
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "@/state";
import PostWidget from "./PostWidget";
import { useEffect } from "react";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

 
  const httpGetPosts = async () => {
    const response = await fetch("http://localhost:3001/post", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const httpGetUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/post/${userId}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      httpGetUserPosts();
    } else {
      httpGetPosts();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>
  {
    posts.map(
      (post)=> (
        <PostWidget
        key={post._id}
        postId={post._id}
        postUserId={userId}
        name={`${post.firstName} ${post.lastName}`}
        description={post.description}
        location={post.location}
        picturePath={post.picturePath}
        userPicturePath={post.userPicturePath}
        likes={post.likes}
        comments={post.comments}
        
        />
      )

  )}</>;
};

export default PostsWidget;
