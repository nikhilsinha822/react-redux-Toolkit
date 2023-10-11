import Posts from "./features/posts/Posts";
import AddPost from "./features/posts/AddPost";

const App = () => {
  return (
    <div className="App">
      <AddPost />
      <Posts />
    </div>
  );
}

export default App;
