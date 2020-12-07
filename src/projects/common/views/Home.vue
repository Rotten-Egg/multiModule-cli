<template>
  <div class="main-content">
    <ul>
      <li v-for="(item,index) in systemList"
          :key="index">
        <a :href="item.basepath">{{item.title}}</a>
      </li>
    </ul>
    <iframe :src="systemUrl"
            width="100%"
            height="100%"
            frameborder="0"
            class="iframe"
            id="bossIframe"></iframe>
  </div>
</template>
<script>

export default {
  components: {

  },
  data() {
    return {
      systemUrl: "",
      isFullscreen: false,
      loading: false,
      systemList: [
        {
          title: "A项目",
          basepath: "http://localhost:8080/#/",
          systemId: "A"
        },
        {
          title: "B项目",
          basepath: "http://localhost:8082/#/",
          systemId: "B"
        },
        {
          title: "C项目",
          basepath: "http://localhost:8083/#/",
          systemId: "c"
        },
        {
          title: "D项目",
          basepath: "http://localhost:8084/#/",
          systemId: "D"
        },
        //....
      ],
      user: {}
    };
  },
  mounted() {
    this.systemUrl =
      this.systemList[0].basepath + "?systemId=" + this.systemList[0].systemId;
  },
  methods: {
    menuClick(name) {
      this.systemUrl = name;
    }
  }
};
</script>

<style lang="less" scoped>
@head-height: 50px;
.main-content {
  height: 100%;
  padding-top: @head-height;
  box-sizing: border-box;
  overflow: hidden;
}
.head-box {
  width: 100%;
  height: @head-height;
  line-height: @head-height;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 1200px;

  .ivu-menu-horizontal {
    height: 100%;
    line-height: @head-height;
  }
  .layout-logo {
    display: inline-block;
    width: 200px;
    color: #fff;
    font-size: 28px;
    text-align: center;
    vertical-align: top;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #2d8cf0;
    z-index: 5;
  }
  .layout-nav {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-left: 200px;
    padding-right: 100px;
    box-sizing: border-box;
    overflow-x: auto;
    z-index: 4;
    &-content {
      //   width: 100%;
      overflow: hidden;
      height: 100%;
    }
  }
  .layout-right {
    padding-right: 20px;
    padding-left: 20px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #2d8cf0;
    z-index: 5;
    a {
      color: #fff;
    }
  }

  .ivu-menu-item-active {
    font-size: 20px;
  }
}
</style>
