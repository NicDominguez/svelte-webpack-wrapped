<script>
  import RuxButton from "../../node_modules/astro-in-svelte/src/svelte/RuxButton.svelte";
</script>

<div>
  <div
    style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;"
  >
    <ul class="button-list">
      <li>
        <RuxButton size="small" iconOnly icon="settings"
          >Small iconOnly button</RuxButton
        >
        <RuxButton size="small">Small button</RuxButton>
      </li>
      <li>
        <RuxButton size="small" icon="settings"
          >Small button with icon</RuxButton
        >
      </li>
      <li>
        <RuxButton size="small" iconOnly disabled icon="settings"
          >Small disabled iconOnly button</RuxButton
        >
        <RuxButton size="small" disabled>Small disabled button</RuxButton>
      </li>
      <li>
        <RuxButton size="small" disabled icon="settings"
          >Small disabled button with icon</RuxButton
        >
      </li>
      <li>
        <RuxButton size="small" iconOnly secondary icon="settings"
          >Small secondary iconOnly button</RuxButton
        >
        <RuxButton size="small" secondary>Small secondary button</RuxButton>
      </li>
      <li>
        <RuxButton size="small" secondary icon="settings"
          >Small secondary button with icon</RuxButton
        >
      </li>
      <li>
        <RuxButton size="small" iconOnly disabled secondary icon="settings"
          >Small disabled secondary iconOnly button</RuxButton
        >
        <RuxButton size="small" secondary disabled
          >Small disabled secondary button</RuxButton
        >
      </li>
      <li>
        <RuxButton size="small" secondary disabled icon="settings"
          >Small disabled secondary button with icon</RuxButton
        >
      </li>
    </ul>
    <ul class="button-list">
      <li>
        <RuxButton iconOnly icon="settings">Standard iconOnly button</RuxButton>
        <RuxButton>Standard button</RuxButton>
      </li>
      <li>
        <RuxButton icon="settings">Standard button with icon</RuxButton>
      </li>
      <li>
        <RuxButton iconOnly disabled icon="settings"
          >Standard disabled iconOnly button</RuxButton
        >
        <RuxButton disabled>Standard disabled button</RuxButton>
      </li>
      <li>
        <RuxButton disabled icon="settings"
          >Standard disabled button with icon</RuxButton
        >
      </li>
      <li>
        <RuxButton iconOnly secondary icon="settings"
          >Standard secondary iconOnly button</RuxButton
        >
        <RuxButton secondary>Standard secondary button</RuxButton>
      </li>
      <li>
        <RuxButton secondary icon="settings"
          >Standard secondary button with icon</RuxButton
        >
      </li>
      <li>
        <RuxButton iconOnly disabled secondary icon="settings"
          >Standard disabled secondary iconOnly button</RuxButton
        >
        <RuxButton secondary disabled
          >Standard disabled secondary button</RuxButton
        >
      </li>
      <li>
        <RuxButton secondary disabled icon="settings"
          >Standard disabled secondary button with icon</RuxButton
        >
      </li>
    </ul>
    <ul class="button-list">
      <li>
        <RuxButton size="large" iconOnly icon="settings"
          >Large iconOnly button</RuxButton
        >
        <RuxButton size="large">Large button</RuxButton>
      </li>
      <li>
        <RuxButton size="large" icon="settings"
          >Large button with icon</RuxButton
        >
      </li>
      <li>
        <RuxButton size="large" iconOnly disabled icon="settings"
          >Large disabled iconOnly button</RuxButton
        >
        <RuxButton size="large" disabled>Large disabled button</RuxButton>
      </li>
      <li>
        <RuxButton size="large" disabled icon="settings"
          >Large disabled button with icon</RuxButton
        >
      </li>
      <li>
        <RuxButton size="large" iconOnly secondary icon="settings"
          >Large secondary iconOnly button</RuxButton
        >
        <RuxButton size="large" secondary>Large secondary button</RuxButton>
      </li>
      <li>
        <RuxButton size="large" secondary icon="settings"
          >Large secondary button with icon</RuxButton
        >
      </li>
      <li>
        <RuxButton size="large" iconOnly disabled secondary icon="settings"
          >Large disabled secondary iconOnly button</RuxButton
        >
        <RuxButton size="large" secondary disabled
          >Large disabled secondary button</RuxButton
        >
      </li>
      <li>
        <RuxButton size="large" secondary disabled icon="settings"
          >Large disabled secondary button with icon</RuxButton
        >
      </li>
    </ul>
  </div>
</div>

<style>
  .button-list {
    list-style-type: none;
    margin: 0 1rem 0 0;
    padding: 0;
    display: flex;
    flex-flow: column;
  }
  .button-list li {
    margin: 0 1rem 1rem 0;
    display: flex;
  }
  .button-list li RuxButton:not(:last-child) {
    margin-right: 1rem;
  }
</style>
