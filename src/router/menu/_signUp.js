export default {
  path: "/signUp",
  name: "signUp",
  component: function(resolve) {
    require(["@/components/Layout/AppLayout.vue"], resolve);
  },
  redirect: "/signUp/index",
  children: [
    {
      path: "index",
      name: "signUp_section",
      component: function(resolve) {
        require(["@/components/SignUp/Index.vue"], resolve);
      }
    }
  ]
};