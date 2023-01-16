<template>
  <div>This is project1</div>
  <div>下面是从project2 远程加载的组件</div>
  <List />
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const List = defineAsyncComponent(() => import("app_project1/List"));
</script>
