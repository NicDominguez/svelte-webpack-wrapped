<script>
</script>

<div
  style="padding: 10%; display: flex; flex-direction: column; justify-content: center;"
>
  <rux-global-status-bar
    include-icon
    include-app-state
    include-username
    app-domain="ABC"
    app-name="App Name"
    app-version="1.0"
    menu-icon="solar"
  >
    <rux-tabs id="tab-set-id-1">
      <rux-tab id="tab-id-1">Tab 1</rux-tab>
      <rux-tab id="tab-id-2">Tab 2</rux-tab>
      <rux-tab id="tab-id-3">Tab 3</rux-tab>
    </rux-tabs>
    <rux-button slot="right-side">Emergency shut off</rux-button>
  </rux-global-status-bar>
  <rux-tab-panels aria-labelledby="tab-set-id-1">
    <rux-tab-panel aria-labelledby="tab-id-1">
      <div
        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;"
      >
        <pre><span>-- Tab 1 HTML content --</span></pre>
      </div>
    </rux-tab-panel>
    <rux-tab-panel aria-labelledby="tab-id-2">
      <div
        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;"
      >
        <pre><span>-- Tab 2 HTML content --</span>></pre>
      </div>
    </rux-tab-panel>
    <rux-tab-panel aria-labelledby="tab-id-3">
      <div
        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;"
      >
        <pre><span>-- Tab 3 HTML content --</span></pre>
      </div>
    </rux-tab-panel>
  </rux-tab-panels>
</div>

<style>
</style>
