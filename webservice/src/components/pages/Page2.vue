<template>
  <div id="pageTwo">
      <div class="job">
          <div class="job_centerer">
            <div class="job_sentence">
              <p>Ich bin beruflich...</p>
            </div>
            <div class="job_selector z_index_100">
                <Select :list="['MIT', 'Hardvard', 'Oxford']" />
            </div>
          </div>
      </div>

      <div class="job">
          <div class="job_centerer">
            <div class="job_sentence">
              <p>Hast du Kinder?</p>
            </div>
            <div class="job_selector">
                <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
                :width="200" :onlySelect="true"
                :readOnly="true"/>
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

.z_index_100 {
  z-index: 100;
}

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
    .job_sentence, .job_sentence2 {
        position: relative;
        width: 35%;
        height: 100%;
        float: left;
        align-items: center;
        display: flex;
        justify-content: center;
        text-align: center;
        p {
          font-size: 20px;
          color: white;
          font-weight: bold;
        }
    }
    .job_selector {
      height: 100%;
      position: relative;
      width: 65%;
      float: right;
      align-items: center;
      display: flex;
      justify-content: center;
    }
}
</style>