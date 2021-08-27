<script>
  import RuxInputField from "../../node_modules/astro-in-svelte/src/svelte/RuxInputField.svelte";

  let label = "hello";

  setInterval(() => {
    if (label === "hello") {
      label = "world";
    } else {
      label = "hello";
    }
  }, 1000);
</script>

<div style="padding: 10%; display: flex; justify-content: center;">
  <div class="grid">
    <RuxInputField label="Text Input" type="text" placeholder="Text input" />
    <RuxInputField bind:label type="text" placeholder="Text input" />
    <RuxInputField
      label="Number Input"
      type="number"
      placeholder="1"
      on:rux-change={() => console.log("rux-change heard")}
    />
    <RuxInputField
      label="Phone Input"
      type="tel"
      placeholder="(999) 999-9999"
      on:change={() => console.log("native change heard")}
    />
    <rux-input-field
      label="Password Input"
      type="password"
      placeholder="Reindeer Flotilla"
    />
    <RuxInputField
      label="Web address"
      type="url"
      placeholder="http://example.com"
    />
    <RuxInputField label="Email" type="email" placeholder="user@example.com" />
    <RuxInputField
      label="Search"
      type="search"
      placeholder="Enter search term"
    />
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
  }
</style>
