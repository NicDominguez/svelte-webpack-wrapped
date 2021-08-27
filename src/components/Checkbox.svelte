<script>
  import RuxCheckbox from "../../node_modules/astro-in-svelte/src/svelte/RuxCheckbox.svelte";

  let checked = true;

  setInterval(() => (checked = !checked), 1000);

  let helpText = "this is hlp text";

  const handleChange = () => {
    console.log("change event fired");
  };

  let errorText = "This is error text";
</script>

<div style="padding: 10%; display: flex; justify-content: center;">
  <RuxCheckbox bind:checked>Default</RuxCheckbox>
  <RuxCheckbox on:change={handleChange}>Native Change Test</RuxCheckbox>
  <RuxCheckbox on:rux-change={handleChange}>Rux Change Test</RuxCheckbox>
  <RuxCheckbox disabled>Disabled</RuxCheckbox>
  <RuxCheckbox indeterminate>Indeterinate</RuxCheckbox>
  <RuxCheckbox {helpText}>Help Text</RuxCheckbox>
  <RuxCheckbox bind:errorText>Error Text</RuxCheckbox>
</div>

<rux-checkbox on:change={handleChange}>Native Change Test</rux-checkbox>
<rux-checkbox on:rux-change={handleChange}>Rux Change Test</rux-checkbox>

<button
  on:click={() => {
    errorText = "Error text chnaged";
  }}>Change error text</button
>

<style>
  :global(*) {
    padding: 1em;
  }
</style>
