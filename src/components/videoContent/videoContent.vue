<template>
  <div class="video-content">
    <VideoPlay></VideoPlay>
  </div>
</template>
<script>
import VideoPlay from "@/components/video";

export default {
  name: "VideContent",
  components: {
    VideoPlay
  }
};
</script>
<style scoped>
.video-content {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 23%;
  left: 23%;
}
</style>