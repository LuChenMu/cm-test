<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import MathVue from './components/Math.vue'
import { delayLoading } from './utils/timeUtils';

async function push(params:string) {
  await delayLoading()
  console.log("🚀 ~ file: App.vue:6 ~ push ~ params:", params)
}
</script>

<template>
  <HelloWorld msg="小朋友" />
  <MathVue :on-push="push" />
</template>
