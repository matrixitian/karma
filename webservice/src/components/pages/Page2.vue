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

      <div id="more_info">
        <div id="left">
          <ul>
            <li>
              <p>Height</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select"/>
            </li>
            <li>
              <p>Weight</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select"/>
            </li>
            <li>
              <p>Fit</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select"/>
            </li>
          </ul>
        </div>
        <div id="right">
          <ul>
            <li>
              <p>I drink...</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select"/>
            </li>
            <li>
              <p>I smoke...</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select"/>
            </li>
            <li>
              <p>I do drugs...</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select"/>
            </li>
          </ul>
        </div>
      </div>

       <div class="job" id="bottom">
          <div class="job_centerer">
            <div class="job_sentence">
              <p>Willst du Kinder?</p>
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
@import '@/assets/mixins/centerXY';


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
  // background-color: blueviolet;
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
    // background-color: brown;
    ul {
      height: 100%;
      padding: 0;
      li {
        width: 100%;
        height: 33%;
        // background-color: blue;
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