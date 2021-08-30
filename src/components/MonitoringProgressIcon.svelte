<script>
  import RuxMonitoringProgressIcon from "../../node_modules/astro-in-svelte/src/svelte/RuxMonitoringProgressIcon.svelte";

  let rangeItems = [
    {
      threshold: 17,
      status: "off",
    },
    {
      threshold: 33,
      status: "standby",
    },
    {
      threshold: 49,
      status: "normal",
    },
    {
      threshold: 65,
      status: "caution",
    },
    {
      threshold: 81,
      status: "serious",
    },
    {
      threshold: 100,
      status: "critical",
    },
  ];
</script>

<RuxMonitoringProgressIcon
  icon="mission"
  label="Mission"
  min={0}
  max={100}
  progress={65}
  range={rangeItems}
/>

<style>
</style>
