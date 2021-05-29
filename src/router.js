import { createRouter, createWebHistory } from "vue-router";
import profile from "@/components/profile.vue";
import contact from "@/components/contact.vue";
import Home from "@/components/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/profile", name: "profile", component: profile },
  { path: "/pontact", name: "contact", component: contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
