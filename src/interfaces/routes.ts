import { FunctionComponent } from 'react';

export interface IRoute {
  name: string;
  path: string;
  element: FunctionComponent;
}