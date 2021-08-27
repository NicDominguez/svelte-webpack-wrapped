<script>
  import RuxLog from "../../node_modules/astro-in-svelte/src/svelte/RuxLog.svelte";
  const args = {
    data: [
      {
        timestamp: new Date(1557503698781),
        status: "off",
        message: "Antenna DGS 1 went offline.",
      },
      {
        timestamp: new Date(1557503698781),
        status: "serious",
        message: "USA-177 experienced solar panel misalignment.",
      },
      {
        timestamp: new Date(1557503698781),
        status: "caution",
        message: "USA-168 suffered power degradation.",
      },
      {
        timestamp: new Date(1557503698781),
        status: "standby",
        message: "Antenna DGS 2 has weak signal.",
      },
      {
        timestamp: new Date(1557503698781),
        status: "off",
        message: "Black FEP 121 is offline.",
      },
      {
        timestamp: new Date(1557503698781),
        status: "off",
        message: "Antenna DGS 1 went offline.",
      },
      {
        timestamp: new Date(1557503698781),
        status: "serious",
        message: "USA-177 experienced solar panel misalignment.",
      },
      {
        timestamp: new Date(1557503698781),
        status: "caution",
        message: "USA-168 suffered power degradation.",
      },
      {
        timestamp: new Date(1557503698781),
        status: "standby",
        message: "Antenna DGS 2 has weak signal.",
      },
      {
        timestamp: new Date(1557503698781),
        status: "off",
        message: "Black FEP 121 is offline.",
      },
    ],
  };
</script>

<div style="display: flex; flex-flow: column; justify-content: center;">
  <RuxLog filter-Vlue="" data="${args.data}" />
</div>

<style>
</style>
