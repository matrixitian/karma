<template>
  <div class="main">
    <div id="top">
      <p></p>
    </div>
    <div id="bottom">
      <div id="accounts">
        <div id="top_placeholder"></div>
        <ul class="accounts">
          <p id="login_as">Login as</p>
          <li class="account" v-for="(acc, i) in accounts" :key="i">
            <img :src="require(`@/assets/profile_photos/${acc.id}.png`)" alt="">
            <p>{{ acc.name }}</p>
            <p>Last active {{ acc.lastActive }} days ago.</p>
          </li>
          <li class="account" id="add_account">
            <p id="plus">+</p>
            <p id="text_add_account">Add Account</p>
          </li>
        </ul>
        <div id="bottom_placeholder"></div>
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
          id: '2',
          name: 'Vera Smith',
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

#top_placeholder {
  height: 25%;
  width: 100%;
}

#bottom_placeholder {
  height: 25%;
  width: 100%;
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
  #login_as {
    font-size: 16px;
    font-weight: bold;
    color: rgb(93, 93, 93);
  }
  #accounts {
    padding: 0;
    width: 100%;
    height: 90%;
    .account {
      background: white;
      border-radius: 7px;
      margin: 10px;
      padding: 15px 10px 20px 10px;
      float: left;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
      img {
        height: 150px;
        width: 150px;
        border-radius: 100%;
      }
      p {
        text-align: center;
        font-weight: bold;
      }
      p:nth-child(2) {
        font-size: 20px;
        margin-top: 10px;
      }
      p:nth-child(3) {
        font-size: 12px;
        margin-top: 10px;
        color: rgba(0, 0, 0, 0.6)
      }
    }
    #add_account {
      background-color: rgba(0, 132, 255, 0.1) !important;
      box-shadow: none !important;
      height: 215px;
      width: 150px;
      #plus {
        color: rgb(0, 132, 255);
        font-weight: bold;
        font-size: 100px !important;
      }
      p {
        margin: 0 !important;
      }
      p#text_add_account {
        color: rgb(0, 132, 255);
        font-size: 18px;
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
