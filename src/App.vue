<!--
CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
-->

<!--Load all components and use them.-->
<template>
 <HeadingCog/>
 <DataCog/>
 <br/>
 <InfoCog/>
 <br/>
 <FooterCog/>
 <br/>
</template>

<!--
Register our "App", import our components, 
and register those with the "App".
-->
<script lang="ts">
import { defineComponent } from 'vue';
import DataCog from './components/DataCog.vue';
import InfoCog from './components/InfoCog.vue';
import FooterCog from './components/FooterCog.vue';
import HeadingCog from './components/HeadingCog.vue';

export default defineComponent(
  {
    name: 'App',
    components: {
      DataCog,
      InfoCog,
      FooterCog,
      HeadingCog
    }
  }
);
</script>

<!--
Styling our app. We use SASS
because I love it.
-->
<style lang="scss">
// Loading our remote fonts.
@font-face{
  font-family: 'Vogue';
  src: url('https://angeldollface.art/assets/fonts/Vogue.ttf') format('truetype');
}
@font-face{
  font-family: 'PSB';
  src: url('https://angeldollface.art/assets/fonts/PSB.ttf') format('truetype');
}

// Setting our layout variables.
$headingFont: 'Vogue';
$contentFont: 'PSB';
$mainColor: #000;
$stdPadding: 20px;
$accentColor: #EA1573;
$hoverColor: #FF7BAC;

// Importing our stylesheets.
@import './sass/desktop';
@import './sass/responsive';
</style>
