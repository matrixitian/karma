<template>
  <div id="pageTwo">
      <div class="job">
          <div class="job_centerer">
            <div class="job_sentence">
              <p>Ich bin beruflich...</p>
            </div>
            <div class="job_selector">
                <Select :list="['MIT', 'Hardvard', 'Oxford']" />
            </div>
          </div>
      </div>

      <div class="job">
          <div class="job_centerer">
            <div class="job_sentence">
              <p>Ich habe...</p>
            </div>
            <div class="job_selector">
                <Select :list="['MIT', 'Hardvard', 'Oxford']" />
            </div>
            <div class="job_sentence2">
              <p>Kinder</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Select from '@/components/parts/Select'

export default {
    components: {
        Select
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/centerY';

.job {
    width: 100%;
    height: 100px;
    background-color: yellow;
}

.job_centerer {
    position: relative;
    width: 500px;
    height: 100%;
    margin: auto;
    background-color: green;
    .job_sentence {
        @include centerY;
        left: 0;
        p {
            font-size: 20px;
            color: white;
            font-weight: bold;
        }
    }
    .job_selector {
        @include centerY;
        right: 0;
    }
}
</style>