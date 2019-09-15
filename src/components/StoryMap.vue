<template>
  <div class="story-map-content">
    <nav class="story-map-story-title">{{ story.title }}</nav>
    <iframe class="map-iframe" src="https://frogcat.github.io/bura-hiroshige/#17/35.68333/139.77457"></iframe>
  </div>
</template>

<script>
export default {
  name: 'StoryMap',
  props: {
    'story': Object,
    'spots': Array
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.story-map-story-title {
  font-size: 18px;
  margin: 10px 0;
}
.map-iframe {
  width: 100%;
  height: 80vh;
  margin-bottom: 200px;
}
</style>
