<template>
  <main>
    <h1 class="story-title">{{ story.title }}</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="テキスト" active>
        <StoryText v-bind:story=story v-bind:spots=spots></StoryText>
      </b-tab>
      <b-tab title="マップ">
        <StoryMap v-bind:spots=spots></StoryMap>
      </b-tab>
    </b-tabs>
  </main>
</template>

<script>
import dataset from '../dataset'
import _ from 'lodash'

import StoryText from '@/components/StoryText'
import StoryMap from '@/components/StoryMap'

export default {
  components: {
    StoryText,
    StoryMap
  },
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
