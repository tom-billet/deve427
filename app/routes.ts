import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), 
    route("/products", "routes/productList.jsx"), 

] satisfies RouteConfig;
