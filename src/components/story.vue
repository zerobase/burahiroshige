<template>
  <main>
    <b-tabs content-class="mt-3">
      <b-tab title="テキスト" active>
        <StoryText v-bind:story=story v-bind:spots=spots></StoryText>
      </b-tab>
      <b-tab title="マップ">
        <StoryMap v-bind:story=story v-bind:spots=spots></StoryMap>
      </b-tab>
    </b-tabs>
  </main>
</template>

<script>
import _ from 'lodash'

import StoryText from '@/components/StoryText'
import StoryMap from '@/components/StoryMap'

export default {
  props: {
    id: Number
  },
  components: {
    StoryText,
    StoryMap
  },
  data () {
    var story = this.$dataset.stories[this.$props.id]
    var spots = _.filter(this.$dataset.spots, (spot) => spot.storyID === this.$props.id)
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
