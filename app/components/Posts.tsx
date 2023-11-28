import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "codewithsand",
      userImg: "/images/yevhen.png",
      img: "https://images.unsplash.com/photo-1695938887083-31f814779e54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
      caption: 'Nice picture'
    },
    {
      id: "2",
      username: "kochetovdev",
      userImg: "/images/yevhen.png",
      img: "https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
      caption: 'Christamas picture'
    },
  ];
  return <div>{posts.map(post => (
    <Post key={post.id} post={post} />
  ))}</div>;
};

export default Posts;
