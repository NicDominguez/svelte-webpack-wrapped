<script>
  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";
  import Form from "./components/Form.svelte";
  import ButtonGroup from "./components/ButtonGroup.svelte";
  import Button from "./components/Button.svelte";
  import CheckBox from "./components/CheckBox.svelte";
  import ClassificationMarking from "./components/ClassificationMarking.svelte";
  import Clock from "./components/Clock.svelte";
  import GlobalStatusBar from "./components/GlobalStatusBar.svelte";
  import Icon from "./components/Icon.svelte";
  import Input from "./components/Input.svelte";
  import Log from "./components/Log.svelte";
</script>

<main>
  <h1>Button Group</h1>
  <ButtonGroup />
  <h1>Button</h1>
  <Button />
  <h1>CheckBox</h1>
  <CheckBox />
  <h1>Classification Marking</h1>
  <ClassificationMarking />
  <h1>Clock</h1>
  <Clock />
  <h1>Global Status Bar</h1>
  <GlobalStatusBar />
  <h1>Icon</h1>
  <Icon />
  <h1>Input</h1>
  <Input />
  <h1>Log</h1>
  <Log />
</main>

<style>
  main {
    padding: 1em;
  }
</style>
