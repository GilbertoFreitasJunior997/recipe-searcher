import { Layout } from "./components/layout";
import { RecipeList } from "./components/recipe-list";
import { RecipeModal } from "./components/recipe-modal";
import { SearchBar } from "./components/search-bar";

export const App = () => {
  return (
    <Layout>
      <SearchBar />
      <RecipeList />
      <RecipeModal />
    </Layout>
  );
};
