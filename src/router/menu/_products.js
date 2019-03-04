export default {
  path: "/products",
  name: "products",
  component: function(resolve) {
    require(["@/components/Layout/AppLayout.vue"], resolve);
  },
  redirect: "/products/list",
  children: [
    {
      path: "",
      name: "products_section",
      component: function(resolve) {
        require(["@/components/Products/Index.vue"], resolve);
      },
      children: [
        {
          path: "list",
          name: "productsList_section",
          component: function(resolve) {
            require(["@/components/Products/List.vue"], resolve);
          }
        }
      ]
    }
  ]
};