<template>
  <main>
    <h1 class="story-title">{{ story.title }}</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="テキスト" active>
        <story-text v-bind:story=story v-bind:spots=spots></story-text>
      </b-tab>
      <b-tab title="マップ">
        <story-map v-bind:spots=spots></story-map>
      </b-tab>
    </b-tabs>
  </main>
</template>

<script>
import dataset from '../dataset'
import _ from 'lodash'

export default {
  data () {
    var storyID = this.$route.params.id
    var story = dataset.stories[storyID]
    var spots = _.filter(dataset.spots, (spot) => spot.storyID === storyID)
    return {
      story: story,
      spots: spots
    }
  }
}
</script>

<style scoped>
main {
  margin: 10px;
}
</style>
