<script>
  import RuxButtonGroup from "../../node_modules/astro-in-svelte/src/svelte/RuxButtonGroup.svelte";
  import RuxButton from "../../node_modules/astro-in-svelte/src/svelte/RuxButton.svelte";

  const handleClick = () => {
    console.log("clicked");
  };
</script>

<div style="padding: 10%; display: flex; justify-content: center;">
  <div class="example-container">
    <RuxButtonGroup hAlign="right">
      <RuxButton secondary>Cancel</RuxButton>
      <RuxButton on:click={handleClick}>Continue</RuxButton>
    </RuxButtonGroup>
  </div>
</div>

<style>
  .example-container {
    min-width: 20rem;
    background: var(--exampleContainerBackgroundColor);
    border: 1px solid var(--exampleContainerBorderColor);
    padding: 0.625rem;
    display: block;
  }
</style>
