import Posts from "./features/posts/Posts";
import AddPost from "./features/posts/AddPost";
import SinglePostPage from "./features/posts/SinglePagePost";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import EditPostForm from "./features/posts/EditPostForm";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path="post">
          <Route index element={<AddPost />} />
          <Route path=":postId" element={<SinglePostPage />}></Route>
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
