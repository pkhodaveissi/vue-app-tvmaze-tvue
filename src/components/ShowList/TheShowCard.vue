<script setup lang="ts">
import type { ShowType } from "./useShowList";

const props = defineProps<{
  item: ShowType;
}>();
</script>

<template>
  <div class="card">
    <img :src="item.image.original" />
    <div class="descriptions">
      <h1>{{ item.name }}</h1>
      <p>
        <strong>Rate: </strong><span>{{ item.rating.average }}</span
        ><br />
        <strong>Language: </strong><span>{{ item.language }}</span
        ><br />
        <strong>Status: </strong><span>{{ item.status }}</span
        ><br />
      </p>
      <button>
        <i class="fab fa-youtube"></i>
        Play trailer on YouTube
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  color: #181818;
  margin: 8px;
  display: inline-flex;
  flex: 1;
  flex-basis: 300px;
  flex-grow: 0;
  height: 440px;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: relative;
}
.card img {
  width: 100%;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}
.descriptions {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);
}
.card:hover .descriptions {
  left: 0px;
  transition: all 0.3s ease-in-out;
  clip-path: circle(75%);
}
.card:hover {
  transition: all 0.2s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transform: scale(0.97);
}
.card:hover img {
  transition: all 0.2s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  transform: scale(1.6) rotate(20deg);
  filter: blur(3px);
}
.card h1 {
  color: #ff3838;
  letter-spacing: 1px;
  margin: 0px;
}
.card p {
  line-height: 24px;
  height: 70%;
  white-space: pre-wrap;
}
.card button {
  width: fit-content;
  height: 40px;
  cursor: pointer;
  border-style: none;
  background-color: #ff3838;
  color: #fff;
  font-size: 15px;
  outline: none;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
}
.card button:hover {
  transform: scale(0.95) translateX(-5px);
  transition: all 0.2s ease-in-out;
}
</style>
