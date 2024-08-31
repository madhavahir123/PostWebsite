import { Container, PostForm } from "../Components/Index";
import servies from "../Appwrite/Conf";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function EditPost() {
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  console.log(slug);

  useEffect(() => {
    if (slug) {
      console.log("posts", posts);
      servies.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    }
  }, [slug, navigate]);

  return posts ? (
    <div className="py-8">
      <Container>
        <PostForm post={posts} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
