// import Vue from "vue";
// import swal from "sweetalert2";

// export default new Vue({
//   data() {
//     return {
//       swal: null
//     };
//   },

//   created() {
//     utils.log("[Alert] Created");

//     // ref to original sweealert2 instance
//     this.swal = swal.mixin({
//       animation: false,
//       customClass: "animated fadeIn fast",
//       buttonsStyling: false, // use template styles
//       confirmButtonClass: "btn btn-primary",
//       cancelButtonClass: "btn btn-secondary",
//       cancelButtonText: "Annulla",
//       confirmButtonText: "OK",
//       reverseButtons: true
//     });
//   },

//   methods: {
//     show(config) {
//       return this.swal(config);
//     },

//     success(message, title) {
//       return this.show({
//         type: "success",
//         title: title,
//         html: message
//       });
//     },

//     error(message, title) {
//       return this.show({
//         type: "error",
//         title: title,
//         html: message
//       });
//     },

//     info(message, title) {
//       return this.show({
//         type: "info",
//         title: title,
//         html: message
//       });
//     },

//     warning(message, title) {
//       return this.show({
//         type: "warning",
//         title: title,
//         html: message
//       });
//     },

//     question(message, title) {
//       return this.show({
//         type: "question",
//         title: title,
//         html: message,
//         showCancelButton: true
//       });
//     }
//   }
// });
