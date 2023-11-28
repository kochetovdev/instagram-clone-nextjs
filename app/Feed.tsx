import MiniProfile from "./components/MiniProfile";
import Posts from "./components/Posts";
import Stories from "./components/Stories";
import Suggestions from "./components/Suggestions";

const Feed = () => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </article>
  );
};

export default Feed;
