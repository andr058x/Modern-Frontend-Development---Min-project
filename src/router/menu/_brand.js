export default {
  path: "/brand",
  name: "brand",
  component: function(resolve) {
    require(["@/components/Layout/AppLayout.vue"], resolve);
  },
  redirect: "/brand/index",
  children: [
    {
      path: "index",
      name: "brand_section",
      component: function(resolve) {
        require(["@/components/Brand/Index.vue"], resolve);
      }
    }
  ]
};
