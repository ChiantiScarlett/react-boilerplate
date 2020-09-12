import LandingPage from "views/landing";
import CounterPage from "views/counter";

export const viewRoutes = {
  landing: {
    path: "/",
    component: LandingPage,
    title: "Sample Landing Page",
  },
  counter: {
    path: "/counter",
    component: CounterPage,
    title: "Sample Counter Page",
  },
};
