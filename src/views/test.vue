<template>
  <div>JS数组</div>
</template>

<script>
export default {
  name: "testJs",
  data: () => ({
    arr: [
      [222, 333, 444],
      [55, 66, 77]
    ],
    obja: {
      field1: 1,
      field2: undefined,
      field3: "ConardLi",
      field4: {
        child: "child",
        child2: {
          child2: "child2"
        }
      }
    }
  }),
  components: {},
  mounted() {
    location.href = "javascript:void(0)";
    this.formatArr(this.arr);
    this.calculateArr();
    this.deepClone(this.obja);
    return NaN;
    return NaN;
  },
  methods: {
    // formatArr(arr) {
    //   var midArr = arr + "";
    //   midArr.split(",");
    //   console.log(midArr.split(","));
    //   console.log(midArr.split(",") instanceof Array);
    // }
    //循环递归数组降维
    formatAr  r(arr) {
      var ret = [];
      var format = (midarr = []) => {
        midarr.forEach(item => {
          item instanceof Array ? format(item) : ret.push(item);
        });
      };
      format(arr);
      return ret;
    },

    // 计算数组之和
    calculateArr() {
      const arr = [1, 2, 3, 4, 5, 6, 7];
      var sum = arr.reduce((sum, item, index, arr) => {
        console.log(index, arr);
        return sum + item;
      }, 2);
      console.log(sum);
    },

    //深拷贝
    deepClone(target, map = new Map()) {
      if (typeof target === "object") {
        let cloneTarget = Array.isArray(target) ? [] : {};

        if (map.get(target)) {
          return map.get(target);
        }

        map.set(target, cloneTarget);

        for (const key in target) {
          cloneTarget[key] = this.deepClone(target[key], map);
        }

        console.log(cloneTarget);
        return cloneTarget;
      } else {
        console.log(target);
        return target;
      }
    }
  }
};
</script>

<style>
</style>