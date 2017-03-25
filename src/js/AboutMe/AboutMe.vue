<template>
    <div id="about-me">
        <img src="../../images/teddirusa.png" class="myImage" v-on:click="greet()">
        {{aboutMe.name}}
    </div>
</template>

<script>
import { aboutMe } from "../data"

export default {
    data: () => {
        return { aboutMe: aboutMe }
    },
    methods: {
        greet: function (event) {  
            alert(`Hello ! I am ${this.$data.aboutMe.name}`);
        }
    }
};
</script>

<style lang="scss" scoped>
@import 'AboutMe.scss'
</style>
