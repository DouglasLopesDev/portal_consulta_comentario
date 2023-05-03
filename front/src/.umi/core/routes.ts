// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/douglas.silva/Electron/AV/ME/front/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/home/App",
    "exact": true,
    "component": require('@/pages/home/App.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
