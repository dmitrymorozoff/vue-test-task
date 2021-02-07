<template>
  <div id="app">
    <Collapse>
      <CollapseHeader slot="header">Книги</CollapseHeader>
      <CollapseContent slot="content">
        <ul>
          <li>Книга номер 1</li>
          <li>Книга номер 2</li>
          <li>Книга номер 3</li>
        </ul>
      </CollapseContent>
    </Collapse>
  </div>
</template>

<script>
import Collapse from "./Collapse/Collapse.vue";
import CollapseContent from "./Collapse/CollapseContent.vue";
import CollapseHeader from "./Collapse/CollapseHeader.vue";

export default {
  name: "App",
  components: {
    CollapseHeader,
    CollapseContent,
    Collapse
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
