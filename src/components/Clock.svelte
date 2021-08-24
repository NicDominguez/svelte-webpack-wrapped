<script>
  const event = new Date("August 19, 1975 23:15:30 GMT+00:00");
</script>

<div
  style="padding: 10%; display: flex; flex-direction: column; justify-content: center;"
>
  <rux-clock />
  <rux-clock small />
  <rux-clock hide-date />
  <rux-clock hide-timezone />
  <rux-clock timezone="America/Los_Angeles" />
  <rux-clock aos={1629481347505} />
  <rux-clock los="{new Date().toISOString()}}" />
</div>

<style>
  rux-clock {
    padding: 1em;
  }
</style>
