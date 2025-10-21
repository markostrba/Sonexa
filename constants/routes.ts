const ROUTES = {
  HOME: "/",
  COMPANIONS: "/companions",
  MY_JOURNEY: "/my-journey",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  NEW_COMPANIONS: "/companions/new",
  SUBSCRIPTION: "/subscription",
  COMPANION: (id: string) => `/companions/${id}`,
};
export default ROUTES;