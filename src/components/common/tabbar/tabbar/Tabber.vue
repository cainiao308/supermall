<template>
    <div class="tabar">
      <slot/>
    </div>
</template>

<script>
export default {
    name: "Tabbar"
}
</script>

<style  scoped>
.tabar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    height: 49px;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 1px rgba(red, green, blue, alpha)
  }
</style>