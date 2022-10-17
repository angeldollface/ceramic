<!--
CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
-->

<!--
A small info div
to explain stuff.
-->
<template>
 <div class="content">
  
  <!--Section heading.-->
  <h2 class="info">How do I find my IMEI?</h2>

  <!--How to find your IMEI on iOS.-->
  <h3 class="info">iOS</h3>
  <p class="info">
   Head over to "Settings", go to "General", and tap "About". 
   Near the bottom there should be an item marked "IMEI".
  </p>

  <!--How to find your IMEI on Android.-->
  <h3 class="info">Android</h3>
  <p class="info">Open the dialer app. Type "*#06#". Your IMEI will be displayed.</p>
 </div>

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
    name: 'InfoCog'
  }
);
</script>