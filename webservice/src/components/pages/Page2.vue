<template>
  <div id="pageTwo">
      <div class="job" id="private_info">
        <div id="private_box"></div>
        <p id="private_info_text">Blaue felder sind an deinem Profil nicht Sichtbar!</p>
      </div>

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
                :readOnly="true"
                class="z_index_4"/>
            </div>
          </div>
      </div>

      <div id="more_info">
        <div id="left">
          <ul>
            <li>
              <p>Height</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select z_index_3"/>
            </li>
            <li>
              <p>Weight</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select z_index_2"/>
            </li>
            <li>
              <p>Fit</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select z_index_1" :readOnly="true" />
            </li>
          </ul>
        </div>
        <div id="right">
          <ul>
            <li>
              <p>I drink...</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select z_index_3" :readOnly="true"/>
            </li>
            <li>
              <p>I smoke...</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select z_index_2" :readOnly="true" />
            </li>
            <li>
              <p class="private_text">I do drugs...</p>
               <Select :list="['Keine Kinder', '1', '2', 'Mehr als 2']" 
              :width="200" class="Select z_index_1" :readOnly="true" />
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
                :readOnly="true" />
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