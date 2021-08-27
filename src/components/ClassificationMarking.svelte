<script>
  import RuxClassificationMarking from "../../node_modules/astro-in-svelte/src/svelte/RuxClassificationMarking.svelte";
</script>

<div
  style="display: flex; flex-flow: column; justify-content: center; margin:20px;"
>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <RuxClassificationMarking classification="top-secret-sci" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <RuxClassificationMarking classification="top-secret" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <RuxClassificationMarking classification="secret" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <RuxClassificationMarking classification="confidential" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <RuxClassificationMarking classification="controlled" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <RuxClassificationMarking classification="unclassified" />
  </div>
</div>
<div
  style="display: flex; flex-flow: column; justify-content: flex-start; width: 400px; margin:60px auto;"
>
  <div
    style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Top Secret//SCI
    </p>
    <RuxClassificationMarking tag classification="top-secret-sci" />
  </div>
  <div
    style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Top Secret
    </p>
    <RuxClassificationMarking tag classification="top-secret" />
  </div>
  <div
    style="display: flex; align-items:baseline;  position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Secret
    </p>
    <RuxClassificationMarking tag classification="secret" />
  </div>
  <div
    style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Confidential
    </p>
    <RuxClassificationMarking tag classification="confidential" />
  </div>
  <div
    style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Controlled Unclassified
    </p>
    <RuxClassificationMarking tag classification="controlled" />
  </div>
  <div
    style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display: flex; width:225px; font-size:13px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Uncontrolled Unclassified
    </p>
    <RuxClassificationMarking tag classification="unclassified" />
  </div>
</div>

<style>
  rux-classification-marking {
    padding: 1em;
  }
</style>
