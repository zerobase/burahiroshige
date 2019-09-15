<template>
  <main>
    <nav class="spot-story-title"><router-link v-bind:to="{ name : 'story', params : { id: story.id }}">{{ story.title }}</router-link></nav>
    <div class="spot-content single">
      <h1 class="spot-title">{{ spot.title }}</h1>
      <p class="spot-lead">{{ spot.lead }}</p>
      <SpotImage v-bind:image="spot.image"></SpotImage>
      <p class="spot-description">{{ spot.description }}</p>
    </div>
    <SpotMap></SpotMap>
  </main>
</template>

<script>
import SpotImage from '@/components/SpotImage'
import SpotMap from '@/components/SpotMap'

export default {
  props: {
    id: Number
  },
  components: {
    SpotImage,
    SpotMap
  },
  data () {
    var spot = this.$dataset.spots[this.$route.params.id]
    return {
      spot: spot,
      story: this.$dataset.stories[spot.storyID]
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
</style>
