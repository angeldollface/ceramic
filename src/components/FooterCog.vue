<!--
CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
-->

<!--A small footer to add some panache.-->
<template>
 
 <!--Contains important info! ;)-->
 <p class="footer">
  Made with love and Glam Metal! XOXO |
  <a class="footer" href="https://github.com/angeldollface/ceramic">Source</a>
 </p>
</template>
   
<!--
Defining the name of the component
and exporting it.
-->
<script lang="ts">
// We import some TS stuff for Vue.
import { defineComponent } from 'vue';
   
// We name and export our component.
export default defineComponent(
    {
       name: 'FooterCog'
    }
);
</script>