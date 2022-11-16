import Detail from '../view/page/detail';
import Favorite from '../view/page/favorite';
import Home from '../view/page/home';

const routes = {
  '/': Home, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
