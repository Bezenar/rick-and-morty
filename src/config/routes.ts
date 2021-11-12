import Characters from "../pages/Characters";
import Episodes from "../pages/Episodes";
import Locations from "../pages/Locations";

import { IRoute } from "../interfaces/routes";

export const routes: Array<IRoute> = [
  {
    name: 'Characters',
    path: '/',
    element: Characters,
  },
  {
    name: 'Characters',
    path: '/characters',
    element: Characters,
  },
  {
    name: 'Locations',
    path: '/locations',
    element: Locations,
  },
  {
    name: 'Episodes',
    path: '/episodes',
    element: Episodes,
  },
];