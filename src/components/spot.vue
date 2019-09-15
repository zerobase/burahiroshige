<template>
  <main>
    <nav class="spot-story-title"><router-link v-bind:to="{ name : 'story', params : { id: story.id }}">{{ story.title }}</router-link></nav>
    <SpotContent v-bind:spot=spot></SpotContent>
  </main>
</template>

<script>
import dataset from '../dataset'
import SpotContent from '@/components/SpotContent'

export default {
  components: {
    SpotContent
  },
  data () {
    var spot = dataset.spots[this.$route.params.id]
    return {
      spot: spot,
      story: dataset.stories[spot.storyID]
    }
  }
}
</script>

<style scoped>
main {
  margin: 10px;
}

.spot-story-title {
  font-size: 18px;
  margin: 10px 0;
}

.spot-title {
  font-size: 24px;
  margin: 20px 0;
}

.spot-lead {
  font-size: 16px;
}

.spot-figure-image {
  margin: 30px 0;
  max-height: 200px;
}

.spot-figure-caption {
  color: #6c757d;
}
</style>
