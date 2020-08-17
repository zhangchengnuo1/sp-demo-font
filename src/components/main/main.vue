<template>
  <div class="main">
    <div class="ContentRight">
      <div class='viewArea'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
  }
}
</script>

<style scoped >
.main {
  width: 100%;
  display: flex;
  margin:20px 20px 20px 20px;
}
.ContentRight {
  height: 100%;
  min-height: 100%;
  width: 80%;
  flex: auto;
  .viewArea {
    height: 100%;
    min-height: 100%;
    width: 100%;
    padding: 8px 10px 5px;
    background: #dfe4f2;
    flex: auto;
    overflow-y: auto;
  }
}
.page {
  border-radius: 5px;
  padding: 2px;
  height: 100%;
  min-height: 100%;
  width: 100%;
  background: #fff;
  flex: auto;
  overflow-y: auto;
}
</style>