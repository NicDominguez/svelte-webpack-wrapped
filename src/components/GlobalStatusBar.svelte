<script>
  import RuxGlobalStatusBar from "../../node_modules/astro-in-svelte/src/svelte/RuxGlobalStatusBar.svelte";
  import RuxTabPanel from "../../node_modules/astro-in-svelte/src/svelte/RuxTabPanel.svelte";
  import RuxTabPanels from "../../node_modules/astro-in-svelte/src/svelte/RuxTabPanels.svelte";
  import RuxTabs from "../../node_modules/astro-in-svelte/src/svelte/RuxTabs.svelte";
  import RuxTab from "../../node_modules/astro-in-svelte/src/svelte/RuxTab.svelte";
  import RuxButton from "../../node_modules/astro-in-svelte/src/svelte/RuxButton.svelte";
</script>

<div
  style="padding: 10%; display: flex; flex-direction: column; justify-content: center;"
>
  <RuxGlobalStatusBar
    include-icon
    include-app-state
    include-username
    app-domain="ABC"
    app-name="App Name"
    app-version="1.0"
    menu-icon="solar"
  >
    <RuxTabs id="tab-set-id-1">
      <RuxTab id="tab-id-1">Tab 1</RuxTab>
      <RuxTab id="tab-id-2">Tab 2</RuxTab>
      <RuxTab id="tab-id-3">Tab 3</RuxTab>
    </RuxTabs>
    <RuxButton slot="right-side">Emergency shut off</RuxButton>
  </RuxGlobalStatusBar>
  <RuxTabPanels aria-labelledby="tab-set-id-1">
    <RuxTabPanel aria-labelledby="tab-id-1">
      <div
        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;"
      >
        <pre><span>-- Tab 1 HTML content --</span></pre>
      </div>
    </RuxTabPanel>
    <RuxTabPanel aria-labelledby="tab-id-2">
      <div
        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;"
      >
        <pre><span>-- Tab 2 HTML content --</span>></pre>
      </div>
    </RuxTabPanel>
    <RuxTabPanel aria-labelledby="tab-id-3">
      <div
        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;"
      >
        <pre><span>-- Tab 3 HTML content --</span></pre>
      </div>
    </RuxTabPanel>
  </RuxTabPanels>
</div>

<style>
</style>
