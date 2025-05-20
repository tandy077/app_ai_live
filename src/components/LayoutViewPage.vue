<template>
  <div id="layout-aiLive" class="layout-aiLive">
    <ul class="aiLive-listbox list-items">
      <!-- row1 -->
      <li class="row-items">
        <h4 class="itemLabel">
          私域直播 +Al助理满血Deepseek模型赋能直播间 <br />
          私域获客/营销/带货/运营的多场景直播能力 <br />
          AI助理帮您的直播带货实现高效变现
        </h4>
        <!-- https://github.com/tandy077/images/blob/main/img001.png?raw=true -->
        <div class="itemStatic">
          <p class="img-b">
            <img src="../assets/img001.png" alt="#" />
          </p>

          <p class="img-b">
            <img src="../assets/img002.png" alt="#" />
          </p>
        </div>
      </li>
      <!-- row2 video-->
      <li class="row-items">
        <h4 class="itemLabel">
          AI 私域直播 <br />
          智能直播赋能商家，强势驱动营销转化
        </h4>
        <div class="itemStatic">
          <p class="img-b">
            <video
              key="video"
              ref="video"
              id="myVideo"
              :style="{ maxHeight: '33.3%', borderRadius: '5px' }"
              controls
              preload="none"
            >
              <source src="../assets/video.mp4" type="video/mp4" />
              <source src="../assets/video.mp4" type="video/mov" />
            </video>
          </p>
        </div>
      </li>
      <!-- row3 -->
      <li class="row-items">
        <h4 class="itemLabel">
          AI 知识店铺 <br />
          AI创作助力内容生成，帮助商家提效变现
        </h4>
        <div class="itemStatic">
          <p class="img-b">
            <img src="../assets/img003.png" alt="#" />
          </p>
        </div>
      </li>
      <!-- row4 -->
      <li class="row-items">
        <h4 class="itemLabel">
          AI 全域营销<br />
          AI强势赋能运营，驱动销售转化，高效降本提效
        </h4>
        <div class="itemStatic">
          <p class="img-b">
            <img src="../assets/img004.png" alt="#" />
          </p>
        </div>
      </li>
      <!-- row5 -->
      <li class="row-items row-items-last">
        <h4 class="itemLabel">
          <span> </span>
          <a
            href="https://work.weixin.qq.com/ca/cawcde95a7bffeaf9b"
            title="点击添加微信"
            class="add-vx-btn"
          >
            <button>点击添加微信</button>
          </a>
        </h4>
        <div class="itemStatic">
          <p class="img-b">
            <img src="../assets/img005.png" alt="#" />
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LayoutViewPage",
  props: {
    msg: String,
  },
  data() {
    return {
      oalist: "",
    };
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#layout-aiLive {
  width: 100%;
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
}

#layout-aiLive ul,
#layout-aiLive ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

#layout-aiLive li.row-items {
  padding: 5px 1%;
}

#layout-aiLive li.row-items .itemStatic img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
}

#layout-aiLive li.row-items .add-vx-btn button {
  max-width: 100%;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  background: #42b983;
  border: 1px solid #42b983;
  border-radius: 0.5rem;
  color: #fff;
}

@media only screen and (max-width: 1000px) {
  #layout-aiLive li.row-items .itemLabel {
    font-size: 80%;
  }
}

@media only screen and (max-width: 650px) {
  #layout-aiLive li.row-items .itemLabel {
    font-size: 8px;
  }

  #layout-aiLive li.row-items .add-vx-btn button {
    padding: 0.15rem 0.35rem;
    border-radius: 0.25rem;
    font-size: 8px;
  }
}
</style>
