<template>
  <div id="pageTwo" v-if="arrCreationComplete && langImported">
      <div class="job" id="private_info">
        <div id="private_box"></div>
        <p id="private_info_text">{{ privacyS }}</p>
      </div>

      <div class="job">
          <div class="job_centerer">
            <div class="job_sentence">
              <p>{{ keywords[0] }}</p>
            </div>
            <div class="job_selector z_index_100">
                <Select :list="['MIT', 'Hardvard', 'Oxford']" />
            </div>
          </div>
      </div>

      <div class="job">
          <div class="job_centerer">
            <div class="job_sentence">
              <p>{{ keywords[1] }}</p>
            </div>
            <div class="job_selector">
                <Select :list="haveChildren" 
                :width="200" :onlySelect="true"
                :readOnly="true"
                class="z_index_4"/>
            </div>
          </div>
      </div>

      <div id="more_info">
        <div id="left">
          <ul>
            <li>
              <p>{{ keywords[2] }}</p>
               <Select :list="heights" :width="200"
               class="Select z_index_3" :onlySelect="true"/>
            </li>
            <li>
              <p>{{ keywords[3] }}</p>
               <Select :list="weights" 
              :width="200" class="Select z_index_2" :onlySelect="true"/>
            </li>
            <li>
              <p>{{ keywords[4] }}</p>
               <Select :list="fit" 
              :width="200" class="Select z_index_1" :readOnly="true" 
              :onlySelect="true"/>
            </li>
          </ul>
        </div>
        <div id="right">
          <ul>
            <li>
              <p>{{ keywords[5] }}</p>
               <Select :list="rightColumn" 
              :width="200" class="Select z_index_3" :readOnly="true"
              :onlySelect="true"/>
            </li>
            <li>
              <p>{{ keywords[6] }}</p>
               <Select :list="rightColumn" 
              :width="200" class="Select z_index_2" :readOnly="true" 
              :onlySelect="true"/>
            </li>
            <li>
              <p class="private_text">{{ keywords[7] }}</p>
               <Select :list="rightColumn" 
              :width="200" class="Select z_index_1" :readOnly="true" 
              :onlySelect="true"/>
            </li>
          </ul>
        </div>
      </div>

       <div class="job" id="bottom">
          <div class="job_centerer">
            <div class="job_sentence">
              <p>{{ keywords[8] }}</p>
            </div>
            <div class="job_selector">
                <Select :list="wantChildren" 
                :width="200" :onlySelect="true"
                :readOnly="true" />
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Select from '@/components/parts/Select'

export default {
  data() {
    return {
      heights: [],
      weights: [],
      langImported: false,
      arrCreationComplete: false,
      heightUnit: 'cm',
      weightUnit: 'kg',
      privacyS: null,
      jobTitlePlaceholder: null,
      keywords: [],
      haveChildren: [],
      fit: [],
      rightColumn: [],
      wantChildren: []
    }
  },
  components: {
      Select
  },
  mounted() {
    this.importLanguage()

    let i
    for (i = 120; i < 272; i++) {
      this.heights.push(`${i} cm`)
    }

    for (i = 40; i < 250; i++) {
      this.weights.push(`${i} kg`)
    }

    this.arrCreationComplete = true
  },
  methods: {
    importLanguage() {
      // Import translation
      let lang = localStorage.getItem('lang')
      if (!lang) lang = 'english'

      const translation = require(`@/assets/translations/page_2_${lang}.js`)

      this.privacyS = translation.data.privacyS
      this.jobTitlePlaceholder = translation.data.jobTitlePlaceholder
      this.keywords = translation.data.keywords

      this.haveChildren = translation.data.haveChildren
      this.fit = translation.data.fit
      this.rightColumn = translation.data.rightColumn
      this.wantChildren = translation.data.wantChildren

      this.langImported = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins/centerY';
@import '@/assets/mixins/centerXY';

.z_index_1 { z-index: 1; }
.z_index_2 { z-index: 2; }
.z_index_3 { z-index: 3; }
.z_index_4 { z-index: 4; }

#private_info {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

#private_info_text {
  color: rgb(1, 27, 51);
  font-size: 15px;
  font-weight: bold;
}

#private_box {
  margin-right: 10px;
  background-color:  rgb(54, 215, 255);
  width: 15px;
  height: 15px;
  border-radius: 4px;
}

.private_text {
  color: rgb(54, 215, 255) !important;
}

#pageTwo {
  @include centerXY;
}

#bottom {
  margin-top: 30px;
}

#more_info {
  height: 150px;
  width: 700px;
  margin: auto;
  position: relative;
  #left, #right {
    width: 50%;
    height: 100%;
    position: absolute;
  }
  #right {
    right: 0;
  }
  #left, #right {
    ul {
      height: 100%;
      padding: 0;
      li {
        width: 100%;
        height: 33%;
        position: relative;
        p {
          @include centerY;
          float: left;
          left: 10px;
          font-size: 20px;
          font-weight: bold;
          color: white;
        }
        .Select {
          @include centerY;
          right: 30px;
          float: right;
        }
      }
    }
  }
}

.z_index_100 {
  z-index: 100;
}

.job {
    width: 100%;
    height: 50px;
}

.job_centerer {
    position: relative;
    width: 500px;
    height: 100%;
    margin: auto;
    .job_sentence, .job_sentence2 {
        position: relative;
        width: 50%;
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
      width: 50%;
      float: right;
      align-items: center;
      display: flex;
      justify-content: center;
    }
}
</style>