<!--
CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
-->

<!--Elements for data retrieval and processing.-->
<template>

<div class="content">
 <!--
 We set the component-wide variable 
 "inputData" to what the user types.
 -->
 <input type="text" v-model="inputData" placeholder="Your IMEI goes here."/>

 <!--
 We make a button to process 
 the input on the user's command.
 -->
 <button @click="processInput">Validate</button>

 <!--
 We give the user feedback about their IMEI.
 -->
 <p class="result">IMEI valid: {{ isValid }}</p>

</div>

</template>
   
<!--
This component does the heavy
lifting of our app.
-->
<script lang="ts">

// We import the library I wrote
// to validate IMEI numbers.
import * as luhny from 'luhny';

// We import some TS stuff for Vue.
import { defineComponent } from 'vue';

// Configuring data, methods, and
// component name.
export default defineComponent(
  {
    // We name and export our component.
    name: 'DataCog',

    // Mutable component data.
    data (){
        return {
            inputData: '',
            isValid: 'Type something!'
        }
    },

    // Methods for different parts of the UI
    // (the button).
    methods: {
        processInput(): void {
          let result: boolean = luhny.validateIMEI(this.inputData);
          if (result){
            this.isValid = true.toString();
          }
          else if (this.inputData == ''){
            this.isValid = 'Empty input!';
          }
          else if (this.inputData.length != 15){
            this.isValid = 'IMEI length invalid!';
          }
          else if (!luhny.isNumberSequence(this.inputData)){
            this.isValid = 'Illegal characters found!';
          }
          else {
            this.isValid = false.toString();
          }
        }
    }
    
  }
);
</script>
