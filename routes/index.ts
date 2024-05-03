export const ROUTES = {
  HOME: "/",
} as const;

const routesList = Object.values(ROUTES);

export type TRoutes = (typeof routesList)[number];
