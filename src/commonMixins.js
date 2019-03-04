//import { AuthenticationEnum, ModuleEnum } from '@/directives/AppAuthorization/authorizationEnums'

export const isRunningMixin = {
  data() {
    return {
      isRunning: false
    };
  },
  methods: {
    setRunning(value) {
      this.isRunning = value;
    }
  }
};

// export const myAuthMixin = {
//   computed: {
//     authModuleEnum() {
//       return ModuleEnum;
//     },
//     authEnum() {
//       return AuthenticationEnum;
//     }
//   }
//}
