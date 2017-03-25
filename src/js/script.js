import Vue from "vue";
import aboutMeComponent from "./AboutMe/AboutMe.vue";

var app = new Vue({
  el: '#app',
  data: {
  },
  components: {
    'about-me': aboutMeComponent,
  }
})

