import { useEffect, useState } from "react";
import servies from "../Appwrite/Conf";
import { Container, PostCard } from "../Components/Index";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    servies.getposts().then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);

  return posts.length !== 0 ? (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts?.map((post) => {
            return (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Login to read posts
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
