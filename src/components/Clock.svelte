<script>
  import RuxClock from "../../node_modules/astro-in-svelte/src/svelte/RuxClock.svelte";
  const event = new Date("August 19, 1975 23:15:30 GMT+00:00");
</script>

<div
  style="padding: 10%; display: flex; flex-direction: column; justify-content: center;"
>
  <RuxClock />
  <RuxClock small />
  <RuxClock hide-date />
  <RuxClock hide-timezone />
  <RuxClock timezone="America/Los_Angeles" />
  <RuxClock aos={1629481347505} />
  <RuxClock los="{new Date().toISOString()}}" />
</div>

<style>
  rux-clock {
    padding: 1em;
  }
</style>
