import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

const Foo = () => import("./views/foo.vue");

const routes = [{ path: "/foo", component: Foo }];

Vue.use(VueRouter);

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

Vue.config.productionTip = false;

Sentry.init({
  Vue,
  dsn:
    "https://4decf2b65f9949fdb833b834c60bf8ac@o932304.ingest.sentry.io/5883749",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
