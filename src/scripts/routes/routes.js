import Detail from '../view/page/detail';
import Favorite from '../view/page/favorite';
import RestaurantList from '../view/page/restaurant-list';

const routes = {
  '/': RestaurantList, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
