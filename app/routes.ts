import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), // default page 
    route("/products", "routes/user/productList.jsx"), // first parameter : url, second parameter : link to file
    route("/cart", "routes/user/cart.jsx"),
    route("/payment", "routes/user/payment.jsx"),
    route("/admin/orders", "routes/admin/orders.jsx")

] satisfies RouteConfig;
