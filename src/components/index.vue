<template>
  <div class="index">
    <div ref="img" :class="getFilter">
      <input
        type="file"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @input="getImg($event)"
      >
    </div>
    <div class="filters">
      <p>选择滤镜</p>
      <select name="选择滤镜" v-model="selected">
        <option v-for="(name,i) in filters" :key="i">{{name}}</option>
      </select>
      <button @click="download" v-show="false">下载</button>
    </div>
    <div ref="canvas"></div>
  </div>
</template>

<script>
export default {
  name: "InsFilters",
  data() {
    return {
      filters: [
        "1977",
        "aden",
        "amaro",
        "ashby",
        "brannan",
        "brooklyn",
        "charmes",
        "clarendon",
        "crema",
        "dogpatch",
        "earlybird",
        "gingham",
        "ginza",
        "hefe",
        "helena",
        "hudson",
        "inkwell",
        "juno",
        "kelvin",
        "lark",
        "lofi",
        "ludwig",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "poprocket",
        "reyes",
        "rise",
        "sierra",
        "skyline",
        "slumber",
        "stinson",
        "sutro",
        "toaster",
        "valencia",
        "vesper",
        "walden",
        "willow",
        "xpro-ii"
      ],
      selected: "1977"
    };
  },
  methods: {
    getImg(e) {
      console.log("TCL: getImg -> file", e.srcElement.files);
      let files = e.srcElement.files;
      if (files.length === 0) {
        alert("请选择文件");
      } else {
        var reader = new FileReader();
        reader.onload = data => {
          console.log("TCL: getImg -> data", data);
          this.$refs.img.style.backgroundImage =
            "url(" + data.srcElement.result + ")";
          // this.imgSrc = data.srcElement.result;
        };
        reader.readAsDataURL(files[0]);
      }
    },
    download() {
      if (!HTMLCanvasElement.prototype.toBlob) {
        //浏览器兼容问题
        Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
          value: function(callback, type, quality) {
            var binStr = atob(this.toDataURL(type, quality).split(",")[1]),
              len = binStr.length,
              arr = new Uint8Array(len);

            for (var i = 0; i < len; i++) {
              arr[i] = binStr.charCodeAt(i);
            }
            callback(new Blob([arr], { type: type || "image/png" }));
          }
        });
      }

      this.$html2canvas(this.$refs.img).then(canvas => {
        canvas.toBlob(blob => {
          // this.$refs.canvas.appendChild(canvas);
          this.$save(blob, "image.png");
        });
      });
    }
  },
  computed: {
    getFilter() {
      return " img filter-" + this.selected;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.index {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
}

.filters {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.filters select {
  margin: 0 20px;
}
.img {
  width: 600px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid salmon;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
.img input {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
}
</style>
