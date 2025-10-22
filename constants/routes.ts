const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  COMPANIONS: "/dashboard/companions",
  MY_JOURNEY: "/dashboard/my-journey",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  NEW_COMPANIONS: "/companions/new",
  SUBSCRIPTION: "/subscription",
  COMPANION: (id: string) => `/companions/${id}`,
};
export default ROUTES;