<template>
  <main>
    <nav class="spot-story-title"><router-link v-bind:to="{ name : 'story', params : { id: story.id }}">{{ story.title }}</router-link></nav>
    <h1 class="spot-title">{{ spot.title }}</h1>
    <p class="spot-lead">{{ spot.lead }}</p>
    <figure class="spot-figure">
      <b-img class="spot-figure-image" v-bind:src=spot.image fluid alt="スポット画像"></b-img>
      <figcaption class="spot-figure-caption">{{ spot.imageCaption }} <small>(Credit: {{ spot.imageCredit }})</small></figcaption>
    </figure>
    <p class="spot-description">{{ spot.description }}</p>
  </main>
</template>

<script>
import dataset from '../dataset'

export default {
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
