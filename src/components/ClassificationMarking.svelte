<script>
</script>

<div
  style="display: flex; flex-flow: column; justify-content: center; margin:20px;"
>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <rux-classification-marking classification="top-secret-sci" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <rux-classification-marking classification="top-secret" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <rux-classification-marking classification="secret" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <rux-classification-marking classification="confidential" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <rux-classification-marking classification="controlled" />
  </div>
  <div
    style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <rux-classification-marking classification="unclassified" />
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
    <rux-classification-marking tag classification="top-secret-sci" />
  </div>
  <div
    style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Top Secret
    </p>
    <rux-classification-marking tag classification="top-secret" />
  </div>
  <div
    style="display: flex; align-items:baseline;  position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Secret
    </p>
    <rux-classification-marking tag classification="secret" />
  </div>
  <div
    style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Confidential
    </p>
    <rux-classification-marking tag classification="confidential" />
  </div>
  <div
    style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Controlled Unclassified
    </p>
    <rux-classification-marking tag classification="controlled" />
  </div>
  <div
    style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
  >
    <p
      style="display: flex; width:225px; font-size:13px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
    >
      Uncontrolled Unclassified
    </p>
    <rux-classification-marking tag classification="unclassified" />
  </div>
</div>

<style>
  rux-classification-marking {
    padding: 1em;
  }
</style>
