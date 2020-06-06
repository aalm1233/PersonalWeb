<template>
  <el-row justify="center">
    <el-col style="text-align:center" :span="2">
      <el-form :data="form" label-width="80px">
        <el-form-item label="Input"></el-form-item>
        <el-form-item label="Input">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="createMap1">get1</el-button>
          <el-button @click="createMap2">get2</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!-- <el-col style="text-align:center" :span="8">
      <el-card :style="{height:windowHeight,color:'red'}">
        <div slot="header">this is a page to play so many wonderful things</div>
        <div :style="{height:windowHeight}" ref="map" id="map"></div>
      </el-card>
    </el-col> -->
    <el-col style="text-align:center" :span="22">
      <el-card :style="{height:windowHeight,color:'blue'}">
        <div slot="header">this is a page to play so many wonderful things</div>
        <div :style="{height:windowHeight}" ref="map1" id="map1"></div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import { createMap,createTestMap } from "@/antv-g6";
import map1Data from '@/data/canvas/map1.json'
export default {
  name: "homepage",
  data() {
    return {
      form: {
        password: "",
        name: ""
      },
      data: {
        nodes: [
          {
            id: "0",
            label: "0",
            value: 10,
            cluster: "a",
            description: "this is node 0, \nand the value of it is 10"
          },
          {
            id: "1",
            label: "1",
            value: 20,
            cluster: "b",
            description: "this is node 1, \nand the value of it is 20"
          },
          {
            id: "2",
            label: "2",
            value: 5,
            cluster: "a",
            description: "this is node 2, \nand the value of it is 5"
          },
          {
            id: "3",
            label: "3",
            value: 10,
            cluster: "a",
            description: "this is node 3, \nand the value of it is 10"
          },
          {
            id: "4",
            label: "4",
            value: 12,
            cluster: "c",
            subCluster: "sb",
            description: "this is node 4, \nand the value of it is 12"
          },
          {
            id: "5",
            label: "5",
            value: 18,
            cluster: "c",
            subCluster: "sa",
            description: "this is node 5, \nand the value of it is 18"
          },
          {
            id: "6",
            label: "6",
            value: 3,
            cluster: "c",
            subCluster: "sa",
            description: "this is node 6, \nand the value of it is 3"
          },
          {
            id: "7",
            label: "7",
            value: 7,
            cluster: "b",
            subCluster: "sa",
            description: "this is node 7, \nand the value of it is 7"
          },
          {
            id: "8",
            label: "8",
            value: 21,
            cluster: "d",
            subCluster: "sb",
            description: "this is node 8, \nand the value of it is 21"
          },
          {
            id: "9",
            label: "9",
            value: 9,
            cluster: "d",
            subCluster: "sb",
            description: "this is node 9, \nand the value of it is 9"
          }
        ],
        edges: [
          {
            source: "1",
            target: "2"
          },
          {
            source: "3",
            target: "2"
          },
          {
            source: "4",
            target: "2"
          },
          {
            source: "5",
            target: "2"
          },
          {
            source: "6",
            target: "2"
          }
        ]
      },
      colors: [
        "#BDD2FD",
        "#BDEFDB",
        "#C2C8D5",
        "#FBE5A2",
        "#F6C3B7",
        "#B6E3F5",
        "#D3C6EA",
        "#FFD8B8",
        "#AAD8D8",
        "#FFD6E7"
      ],
      strokes: [
        "#5B8FF9",
        "#5AD8A6",
        "#5D7092",
        "#F6BD16",
        "#E8684A",
        "#6DC8EC",
        "#9270CA",
        "#FF9D4D",
        "#269A99",
        "#FF99C3"
      ]
    };
  },
  computed: {
    windowHeight: {
      get() {
        return window.outerHeight + "px";
      }
    }
  },
  methods: {
    getWeather() {},
    createMap2() {
      let height = this.$refs.map1.clientHeight-20;
      let width = this.$refs.map1.clientWidth-20;
      createTestMap("map1",map1Data, width, height,)
    },
    createMap1() {
      let height = this.$refs.map.clientHeight;
      let width = this.$refs.map.clientWidth;
      createMap("map", this.data, width, height, this.colors, this.strokes);
    }
  }
};
</script>