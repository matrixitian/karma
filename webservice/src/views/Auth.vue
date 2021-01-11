<template>
  <div class="main">
    <div id="top">
      <p></p>
    </div>
    <div id="bottom">
      <div id="accounts">
        <ul class="accounts" v-for="(acc, i) in accounts" :key="i">
          <li class="account">
            <img :src="require(`@/assets/profile_photos/${acc.id}.png`)" alt="">
            <p>{{ acc.name }}</p>
            <p>Last active {{ acc.lastActive }} days ago.</p>
          </li>
        </ul>
      </div>
      <div id="license"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          id: '1',
          name: 'Steve Jobs',
          lastActive: '2' // days
        },
        {
          id: '1',
          name: 'Steve Jobs',
          lastActive: '2' // days
        }
      ]
    }
  },
  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

#top {
  background: rgb(6,8,98);
  background: linear-gradient(0deg, rgba(6,8,98,1) 0%, rgba(181,0,255,1) 100%);
  width: 100%;
  height: 40%;
}
#bottom {
  background-color: white;
  width: 100%;
  height: 60%;
  #accounts {
    width: 100%;
    height: 90%;
    .account {
      border-radius: 7px;
      margin: 10px;
      padding: 15px 20px 20px 20px;
      float: left;
      box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
      img {
        height: 150px;
        width: 150px;
      }
      p:nth-child(2) {
        font-weight: bold;
        font-size: 20px;
        margin-top: 10px;
      }
      p:nth-child(3) {
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  }
  #license {
    border-top: 1px solid #d8d8d8;
    border-width: 70%;
    margin: auto;
    width: 80%;
    height: 10%;
  }
}

.main {
  padding: 0 !important;
  margin: 0 !important;
  background-color: black;
  width: 100vw !important;
  height: 100vh !important;
  // border: 4px solid white;
}
</style>
