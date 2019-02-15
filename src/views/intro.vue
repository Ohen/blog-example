<template>
  <div id="join">
    <div class="enter-profile">
      <img src="../assets/eddie.png" class="enter-profile__image">
      <p class="enter-profile__name">{{ language[$store.state.language].user }}</p>
    </div>
    <div class="join__button-area">
      <transition name="fade" mode="out-in">
        <button class="join__button-area__button"
          @click="onEnter" v-if="!join"
        >
          {{ language[$store.state.language].join }}
        </button>
      </transition>
    </div>
    <div class="join__time-area">
      <div class="join__time-area--time">
        {{ time }}
        <b class="join__time-area--ap">{{ ap }}</b>
      </div>
      <div class="join__time-area--date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
import Language from '@/language/intro-language.js'
import Format from '@/date-format.js'

export default {
  data () {
    return {
      language: Language,
      join: false,
      format: Format,
      time: Format.getTime(null, this.$store.state.language),
      date: Format.getDate(null, this.$store.state.language),
      ap: Format.getAp(null, this.$store.state.language)
    }
  },
  created () {
    this.refreshTime()
  },
  methods: {
    refreshTime () {
      setInterval(() => {
        this.time = this.format.getTime(null, this.$store.state.language)
        this.date = this.format.getDate(null, this.$store.state.language)
        this.ap = this.format.getAp(null, this.$store.state.language)
      }, 1000)
    },
    onEnter () {
      this.join = true
      setTimeout(() => {
        this.$emit('onEnter')
      }, 1000)
    }
  }
}
</script>

<style lang="scss">

#join {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  .enter-profile {
    width: 100%;
    text-align: center;

    @media only screen and (min-width: 320px), (min-width: 768px) {
      margin-top: 25%;
    }

    @media only screen and (min-width: 1224px) {
      margin-top: 10%;
    }

    .enter-profile__image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 3px solid #fff;
      background-color: #fff;
    }

    .enter-profile__name {
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  .join__button-area {
    margin: auto;
    margin-top: 50px;
    text-align: center;

    .join__button-area__button {
      cursor: pointer;
      border: 1px solid #fff;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0);
      outline: none;
      color: #fff;
      font-weight: bold;
      padding: 10px 20px;
      transition: 0.3s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: #eee;
      }
    }

    .join__button-area__message {
      width: 100%;
      font-weight: bold;
      font-size: 2rem;
      color: #fff;
      text-align: center;
    }
  }

  .join__time-area {
    position: absolute;
    bottom: 0;
    margin: 20px;
    color: #fff;

    .join__time-area--time {
      font-weight: bold;

      @media only screen and (min-width: 320px) {
        font-size: 2.5rem;
      }

      @media only screen and (min-width: 770px), (min-width: 1300px) {
        font-size: 4rem;
      }
    }

    .join__time-area--date {
      @media only screen and (min-width: 320px) {
        font-size: 1rem;
      }

      @media only screen and (min-width: 770px), (min-width: 1300px) {
        font-size: 1.7rem;
      }
    }

    .join__time-area--ap {
      font-size: 1.7rem;
    }
  }
}

</style>
