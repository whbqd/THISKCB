<template>
  <div id="index">
    <div id="logo">
      <img src="../assets/au.jpeg" alt="" />
    </div>
    <div class="content">
      <dv-border-box-12 id="kcb">
        <div class="top">
          <div>星期一</div>
          <div>星期二</div>
          <div>星期三</div>
          <div>星期四</div>
          <div>星期五</div>
          <div>星期六</div>
          <div>星期天</div>
        </div>
        <div class="kb_item mn">
          <div class="title">上午</div>
          <div class="kbContent">
            <div class="kb">
              <ul>
                <li>语文</li>
                <li>数学</li>
                <li>英语</li>
                <li>体育</li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="kb_item after">
          <div class="title">下午</div>
          <div class="kbContent">
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="kb">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="kcb-text">
          <img src="../assets/ke.png" alt="" /><img
            src="../assets/cheng.png"
            alt=""
          /><img src="../assets/biao.png" alt="" />
        </div>
        <div class="hj">
          <img src="../assets/hj.png" alt="" />
        </div>
        <div class="xq1">
          <img src="../assets/xq1.png" alt="" />
        </div>
        <div class="xq2">
          <img src="../assets/xq2.png" alt="" />
        </div>
        <div class="xq3">
          <img src="../assets/xq3.png" alt="" />
        </div>
        <div class="xq4">
          <img src="../assets/xq4.png" alt="" />
        </div>
      </dv-border-box-12>
    </div>
    <!-- <p id="zz">翠苑一小三（四）班王佳宜作品</p> -->
    <button @click="printOut('课程表')">导出课程表</button>
  </div>
</template>

<script>
import $ from "jquery";
import html2canvas from "html2canvas";
export default {
  mounted() {
    const liList = document.querySelectorAll(".kb li");
    console.log(liList);
    liList.forEach((item) => {
      item.setAttribute("contenteditable", true);
    });
  },
  methods: {
    dataURLToBlob(dataurl) {
      //ie 图片转格式
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },

    downloadResult(name) {
      let canvasID = document.body;
      let a = document.createElement("a");
      html2canvas(canvasID).then((canvas) => {
        let dom = document.body.appendChild(canvas);
        dom.style.display = "none";
        a.style.display = "none";
        document.body.removeChild(dom);
        let blob = this.dataURLToBlob(dom.toDataURL("image/png"));
        a.setAttribute("href", URL.createObjectURL(blob));
        a.setAttribute("download", name + ".png");
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(blob);
        document.body.removeChild(a);
      });
    },

    printOut(name) {
      // 个人观察只是截取可见范围以及以下的区域，所以先将滚动条置顶
      $(window).scrollTop(0); // jQuery 的方法
      document.body.scrollTop = 0; // IE的
      document.documentElement.scrollTop = 0; // 其他
      $("button").css("display", "none");
      const p = document.createElement("p");
      p.style.position = "absolute";
      p.style.right = "15px";
      p.style.bottom = "15px";
      p.style.color = "#fff";
      const p1 = document.createElement("p");
      p1.style.margin = 0;
      p1.innerText = "翠苑一小三(四)班";
      const p2 = document.createElement("p");
      p2.style.margin = "5px";
      p2.style.textAlign = 'right';
      p2.innerText = "王佳宜作品";
      p.appendChild(p1);
      p.appendChild(p2);
      document.getElementById("index").appendChild(p);
      this.downloadResult(name);
      document.getElementById("index").removeChild(p);
      $("button").css("display", "inline-block");
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  color: #2d3436;
  font-weight: 700;
  font-size: 16px;
}
ul {
  list-style: none;
}
#index {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/bg.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  #logo {
    position: absolute;
    left: 0;
    top: 0;
    img {
      width: 280px;
      border-radius: 10px;
    }
  }

  #kcb {
    width: 700px;
    height: 367px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px 10px 20px 20px;
    .kcb-text {
      display: flex;
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      top: -120px;
      img {
        width: 100px;
      }
    }
    .hj {
      position: absolute;
      right: -79px;
      top: -69px;
      img {
        width: 120px;
      }
    }
    .xq1 {
      position: absolute;
      right: -149px;
      bottom: -118px;
      img {
        width: 230px;
      }
    }
    .xq2 {
      position: absolute;
      left: -118px;
      top: -100px;
      transform: rotate(30deg);
      img {
        width: 150px;
      }
    }
    .xq3 {
      position: absolute;
      left: -128px;
      top: 100px;
      // transform: rotate(30deg);
      img {
        width: 80px;
      }
    }

    .xq4 {
      position: absolute;
      left: -116px;
      bottom: -89px;
      transform: rotate(-10deg);
      img {
        width: 140px;
      }
    }
    .top {
      box-sizing: border-box;
      width: 100%;
      height: 30px;

      display: flex;
      justify-content: space-around;
      padding-left: 60px;
      line-height: 30px;
      div {
        color: #fff;
        width: 50px;
        text-align: center;
      }
    }

    .kb_item {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      margin-top: 15px;
      .title {
        width: 60px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fff;
      }
      .kbContent {
        flex: 1;
        display: flex;
        justify-content: space-around;
      }
      .kb {
        width: 50px;
        // flex: 1;
        li {
          width: 100%;
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          text-align: center;
          margin-bottom: 15px;
          border-radius: 4px;
          font-size: 14px;
          &:last-of-type {
            margin: 0;
          }
        }
      }
    }
  }
  button {
    position: absolute;
    width: 100px;
    height: 50px;
    bottom: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background: #786fa6;
    color: #fff;
  }
}
.mn .title,
.mn li {
  background: #5758bb;
}
.after .title,
.after li {
  background: #0abde3;
}
</style>