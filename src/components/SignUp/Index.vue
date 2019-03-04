<template>
  <div>
    <div class="card sign-t-img mb-0">
    </div>
    <div class="card sign-img">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <form action="" id="login form">
            <div class="row">
              <div class="col-lg-12 mt-4 mb-4 sign-text">
                <h4>Login</h4>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input v-validate="'email'" v-model="loginModel.login" :class="{
                        'form-control-danger': formErrors.has('loginUsername:email')}"
                        ref="loginUsername" placeholder="Your email" name="loginUsername" data-vv-validate-on="blur"
                        data-vv-as="login" type="text" class="form-control" aria-label="loginUsername" aria-describedby="loginUsername" />
                      <small class="form-control-feedback">
                        <span v-if="formErrors.has('loginUsername')"><span v-html="formErrors.first('loginUsername')" /></span>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input placeholder="Your password" name="loginPassword" ref="loginPassword" type="password" class="form-control"
                        aria-label="loginPassword" aria-describedby="loginPassword" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <button type="button" class="btn btn-primary" :disabled="!isLoginFormValid">SIGN IN</button></div>
                  <div class="col-md-3"></div>
                  <div class="col-md-6 text-right"><a href="">Forgot your password <i class="fa fa-arrow"></i></a></div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-4">
          <form action="" id="register form">
            <div class="row">
              <div class="col-lg-12 mb-4 mt-4 sign-text">
                <h4>Register</h4>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input v-validate="'required|email'" v-model="regModel.login" :class="{
                        'form-control-danger': formErrors.has('regUsername:email')}"
                        placeholder="Your email" name="regUsername" data-vv-validate-on="blur" data-vv-as="login" type="text"
                        class="form-control" aria-label="regUsername" aria-describedby="regUsername" />
                      <small class="form-control-feedback">
                        <span v-if="formErrors.has('regUsername:required')">Email value is required</span>
                        <span v-if="formErrors.has('regUsername:email')">Email value is not in a valid email format.</span>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input v-validate="{
                        required: true,
                        password: true
                      }"
                        id="regPassword" ref="regPassword" v-model="regModel.password" :enable-toggle="false" name="regPassword"
                        placeholder="Your password" type="password" class="form-control" aria-label="regPassword"
                        aria-describedby="regPassword" />
                      <small class="form-control-feedback">
                        <span v-if="formErrors.has('regPassword:required')">Password value is required</span>
                        <span v-if="formErrors.has('regPassword:password')">The password must be at least 8 characters
                          long,
                          must have an uppercase character,
                          at least one number, at least one special character (excluding the space)</span>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group mb-2">
                      <input v-validate="'confirmed:regPassword'" v-model="regModel.cpassword" data-vv-as="Confirm password"
                        name="regCPassword" placeholder="Confirm password" type="password" class="form-control"
                        aria-label="regCPassword" aria-describedby="regCPassword" />
                      <small class="form-control-feedback">
                        <span v-if="formErrors.has('regCPassword')">The passwords don't match</span>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 checkdiv">
                    <input id="forexclusive" type="checkbox" value="" class="filled-in chk-col-light-blue" />
                    <label for="forexclusive">Sign up for exclusive updates, discounts, new arrivals, contests and
                      more!</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <button type="button" :disabled="!isRegFormValid" class="btn btn-primary">CREATE ACCOUNT</button></div>
                  <div class="col-md-6 text-right agree-text">By clicking Create Account, you agree to our <a href="">Privacy
                      policy</a></div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Validator
  } from "vee-validate";
  export default {
    name: "SignUp",
    computed: {
      isLoginFormValid() {
        return !Object.keys(this.formFields).some(
          key => {
            return this.formFields[key].invalid && key.startsWith("login")
          }
        );
      },
      isRegFormValid() {
        return !Object.keys(this.formFields).some(
          key => this.formFields[key].invalid && key.startsWith("reg")
        );
      },
    },
    data() {
      return {
        loginModel: {
          login: '',
          password: ''
        },
        regModel: {
          login: '',
          password: '',
          cpassword: '',
          check: false
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .checkdiv label,
  .agree-text {
    font-size: 10px;
  }

  @media(min-width:1220px) {
    .sign-t-img {
      background-image: url("../../assets/images/background/sign-top.png");
      min-height: 350px;
      margin-top: 0px;
      background-position: center;
      background-repeat: no-repeat;
    }

    .sign-img img {
      max-width: 400px;
    }
  }

  @media(max-width:1219px) {
    .sign-img img {
      max-width: 200px;
    }

    .sign-t-img {
      display: none;
    }
  }

  @media(max-width:761px) {
    .sign-img img {
      max-width: 200px;
      margin-left: 30px;
    }

    .brasignnd-text {
      margin-left: 30px;
      margin-right: 30px;
    }
  }

  h4,
  h5 {
    text-transform: uppercase;
  }
</style>