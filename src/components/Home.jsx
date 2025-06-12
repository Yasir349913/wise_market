import Herosection from "./Herosection";
import Topcategories from "./Topcategories";
import Latestproducts from "./Latestproducts";
import Popularproducts from "./Popularproducts";
import Featureddeals from "./Featureddeals";
let Home = () => {
  return (
    <>
      <Herosection></Herosection>
      <Topcategories></Topcategories>
      <Latestproducts></Latestproducts>
      <Popularproducts></Popularproducts>
      <Featureddeals></Featureddeals>
    </>
  );
};
export default Home;
