<template>
  <div class="timeline col-md-8 container-fluid">
    <!-- 中心線 -->
    <div class="centerLine"></div>

    <div v-for="(month, mindex) in months" :key="mindex">
      <div class="month mb-3" @click="toggle(mindex)">
        <img class="img-fluid" :src="require('@/assets/month.png')" />
        <span class="monthName text-center">{{ month.name }}</span>
      </div>
      <ul class="list-group" :id="'m-' + mindex">
        <li class="list-group-item mb-5 border-0" v-for="(work, aindex) in artworks[mindex]" :key="aindex">
          <div class="content px-3" @click="showImg(mindex, aindex)">
            <img class="img-thumbnail img-fluid rounded" :src="work.src" />
          </div>
          <div class="dot"></div>
          <p class="date text-white">{{ work.date }}</p>
          <p class="description mt-4 text-white">{{ work.description }}</p>
        </li>
      </ul>
    </div>

    <!-- Light Box -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="artworks[mindex]"
      :index="aindex"
      :loop="true"
      @hide="handleHide"
      :moveDisabled="true"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import $ from "jquery";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "Timeline",
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      mindex: 0,
      aindex: 0,
      visible: false,
      months: [{ name: "Aug" }, { name: "Jul" }],
      artworks: [
        [
          {
            src: require("@/assets/0802-2.jpg"),
            description: "Lava Lava",
            date: "2021-08-02",
          },
          {
            src: require("@/assets/0802.jpg"),
            description: "Archimedes",
            date: "2021-08-02",
          },
        ],
        [
          {
            src: require("@/assets/0730-3.jpg"),
            description: "Seashell",
            date: "2021-07-30",
          },
          {
            src: require("@/assets/0730-2.jpg"),
            description: "Key Chain",
            date: "2021-07-30",
          },
          {
            src: require("@/assets/0730.jpg"),
            description: "Frame",
            date: "2021-07-30",
          },
          {
            src: require("@/assets/0729-3.jpg"),
            description: "Seashell",
            date: "2021-07-29",
          },
          {
            src: require("@/assets/0729-2.jpg"),
            description: "Coaster",
            date: "2021-07-29",
          },
          {
            src: require("@/assets/0729.jpg"),
            description: "Frame",
            date: "2021-07-29",
          },
          {
            src: require("@/assets/0728-2.jpg"),
            description: "Seashell",
            date: "2021-07-28",
          },
          {
            src: require("@/assets/0728.jpg"),
            description: "Stella",
            date: "2021-07-28",
          },
          {
            src: require("@/assets/0726.jpg"),
            description: "Coaster",
            date: "2021-07-26",
          },
          {
            src: require("@/assets/0723-2.jpg"),
            description: "Bookmark",
            date: "2021-07-23",
          },
          {
            src: require("@/assets/0723.jpg"),
            description: "Melody",
            date: "2021-07-23",
          },
          {
            src: require("@/assets/0721.jpg"),
            description: "Frame",
            date: "2021-07-21",
          },
          {
            src: require("@/assets/0720.jpg"),
            description: "Circus",
            date: "2021-07-20",
          },
          {
            src: require("@/assets/0719.jpg"),
            description: "Bookmarks",
            date: "2021-07-19",
          },
          {
            src: require("@/assets/0718.jpg"),
            description: "Coaster",
            date: "2021-07-18",
          },
          {
            src: require("@/assets/0715.jpg"),
            description: "Coaster",
            date: "2021-07-15",
          },
          {
            src: require("@/assets/0714-2.jpg"),
            description: "Feather",
            date: "2021-07-14",
          },
          {
            src: require("@/assets/0714.jpg"),
            description: "Bookmarks",
            date: "2021-07-14",
          },
          {
            src: require("@/assets/0712.jpg"),
            description: "Feather",
            date: "2021-07-12",
          },
          {
            src: require("@/assets/0710.jpg"),
            description: "Rainbow",
            date: "2021-07-10",
          },
          {
            src: require("@/assets/0708.jpg"),
            description: "Feather",
            date: "2021-07-08",
          },
          {
            src: require("@/assets/0707.jpg"),
            description: "Feather",
            date: "2021-07-07",
          },
        ],
      ],
    };
  },
  methods: {
    showImg(mindex, aindex) {
      this.mindex = mindex;
      this.aindex = aindex;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    toggle(mindex) {
      let content = $(`#m-${mindex}`);
      if (content.hasClass("collapsed")) {
        content.removeClass("collapsed");
      } else {
        content.addClass("collapsed");
      }
    },
    setFloat() {
      let allListItem = document.getElementsByClassName("list-group-item");
      allListItem.forEach((item, i) => {
        if (i % 2 === 0) {
          item.classList.add("toLeft");
        } else {
          item.classList.add("toRight");
        }
      });
    },
    setHeight() {
      this.months.forEach((month, i) => {
        let target = $(`#m-${i}`);
        let h = Math.ceil(target.height());
        target.css({ "maxHeight" : `${h}px` });
        if (i !== 0) {
          target.addClass("collapsed");
        }
      });
    },
  },
  mounted() {
    $(window).on("load", () => {
      // 設定所有內容的靠左靠右
      this.setFloat();
      // 設定所有內容的高度
      this.setHeight();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/variables.scss";

.timeline {
  position: relative;
  padding: 130px 0 30px;
}
.centerLine {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: $secondary;
}
.list-group {
  overflow: hidden;
  transition: max-height 0.7s ease-out;
  -webkit-transition: max-height 0.7s;
  -moz-transition: max-height 0.7s;
  -ms-transition: max-height 0.7s;
  -o-transition: max-height 0.7s;
}
.list-group-item {
  width: 100%;
  background: none;
  position: relative;
  float: left;
  clear: both;
  &.toRight {
    .content {
      float: right;
    }
    .date,
    .description {
      right: 55%;
      text-align: right;
    }
  }
  &.toLeft {
    .content {
      float: left;
    }
    .date,
    .description {
      left: 55%;
      text-align: left;
    }
  }
}
.month {
  position: relative;
  width: 80px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
  cursor: pointer;
  img,
  .monthName {
    position: absolute;
    top: 0;
    bottom: 0;
    color: $secondary;
  }
  .monthName {
    left: 50%;
    transform: translateX(-50%);
    font-family: "MonteCarlo";
    font-weight: bold;
    font-size: 1.6rem;
  }
}
.content {
  clear: both;
  width: 48%;
  cursor: pointer;
}
.dot {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: $secondary;
}
.date {
  position: absolute;
  font-weight: bold;
}
.description {
  position: absolute;
  font-size: 0.9rem;
}

.collapsed {
  max-height: 0px !important;
}
</style>
