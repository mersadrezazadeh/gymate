import SearchBar from "./SearchBar";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import PopularTags from "./PopularTags";
import Banner from "./Banner";

function Sidebar() {
  return (
    <aside className="hidden 2xl:block">
      <div className="sticky top-[calc(100dvh-2310px)] flex flex-col gap-10">
        <SearchBar />

        <Categories />

        <RecentPosts />

        <PopularTags />

        <Banner />
      </div>
    </aside>
  );
}

export default Sidebar;
