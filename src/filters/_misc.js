const currencyFilters = {
  install(Vue) {
    //
    // misc
    //
    Vue.filter("json", function(value) {
      return utils.json(value);
    });
  }
};

export default currencyFilters;
