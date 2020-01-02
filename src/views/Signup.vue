<template>
  <!-- https://vuetifyjs.com/en/components/forms -->
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>Signup</h1>
          <v-form ref="signUpForm" v-model="formValidity">
            <v-text-field label="Email" required type="email" v-model="email" :rules="emailRules"></v-text-field>
            <v-autocomplete label="Which browser do you use?" :items="browsers"></v-autocomplete>
            <v-file-input label="Attach profile picture"></v-file-input>
            <v-text-field readonly label="Birthday" v-model="birthday"></v-text-field>
            <v-date-picker landscape v-model="birthday"></v-date-picker>
            <v-checkbox
              label="Agree to terms & conditions"
              required
              v-model="agreeToTerms"
              :rules="agreeToTermRules"
            ></v-checkbox>
            <v-switch label="Example switch toggle"></v-switch>
            <v-btn color="primary" class="mr-4" type="submit" :disabled="!formValidity">Submit</v-btn>
            <v-btn color="success" class="mr-4" @click="validateForm">Validate Form</v-btn>
            <v-btn color="warning" class="mr-4" @click="resetValidation">Reset Validation</v-btn>
            <v-btn color="error" @click="resetForm">Reset</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    birthday: "",
    browsers: ["Chrome", "Firefox", "Safari", "Edge", "Brave"],
    // "value" is an input value, can name whatever you want. Return the left if "value" is true, return what's on the right if the left side is false. !!value in this case is the rule we want to validate, the !! is JS shorthand to convert value to it's boolean type. If the ruleis false, the string "this is required" is returned.
    email: "",
    emailRules: [
      value => !!value || "An email address is required.",
      // Vuetify will only display one validation error at a time. Goes in order.
      value => value.indexOf("@") !== 0 || "Email should have a username.",
      value => value.includes("@") || "Email should include an '@' symbol.",
      value =>
        value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email should contain a valid domain.",
      value =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid domain extension of at least 2 characters."
    ],
    agreeToTerms: false,
    agreeToTermRules: [
      value =>
        !!value ||
        "You must agree to the terms and conditions in order to sign up for an account. Please check the box to agree."
    ],
    formValidity: false
  }),
  methods: {
    resetValidation() {
      // refer to the form directly in order to call the functions in the Vuetify form docs: https://vuetifyjs.com/en/components/forms
      //   this.$refs is a Vue instance property that contains DOM elements and component instances that have beeen registed with the ref attribute. This is not specific to Vuetify.
      this.$refs.signUpForm.resetValidation();
    },
    resetForm() {
      this.$refs.signUpForm.reset();
    },
    validateForm() {
      this.$refs.signUpForm.validate();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>