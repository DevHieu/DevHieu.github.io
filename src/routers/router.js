import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Library from "../pages/Library/Library";
import LoginRegister from "../pages/Login-Register/login-register";

const publicRouters = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  { path: "/library", component: Library },
  { path: "/login-register", component: LoginRegister },
];

export { publicRouters };
