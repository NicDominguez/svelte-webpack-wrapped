<script>
</script>

<div>
  <div
    style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;"
  >
    <ul class="button-list">
      <li>
        <rux-button size="small" icon-only icon="settings"
          >Small icon-only button</rux-button
        >
        <rux-button size="small">Small button</rux-button>
      </li>
      <li>
        <rux-button size="small" icon="settings"
          >Small button with icon</rux-button
        >
      </li>
      <li>
        <rux-button size="small" icon-only disabled icon="settings"
          >Small disabled icon-only button</rux-button
        >
        <rux-button size="small" disabled>Small disabled button</rux-button>
      </li>
      <li>
        <rux-button size="small" disabled icon="settings"
          >Small disabled button with icon</rux-button
        >
      </li>
      <li>
        <rux-button size="small" icon-only secondary icon="settings"
          >Small secondary icon-only button</rux-button
        >
        <rux-button size="small" secondary>Small secondary button</rux-button>
      </li>
      <li>
        <rux-button size="small" secondary icon="settings"
          >Small secondary button with icon</rux-button
        >
      </li>
      <li>
        <rux-button size="small" icon-only disabled secondary icon="settings"
          >Small disabled secondary icon-only button</rux-button
        >
        <rux-button size="small" secondary disabled
          >Small disabled secondary button</rux-button
        >
      </li>
      <li>
        <rux-button size="small" secondary disabled icon="settings"
          >Small disabled secondary button with icon</rux-button
        >
      </li>
    </ul>
    <ul class="button-list">
      <li>
        <rux-button icon-only icon="settings"
          >Standard icon-only button</rux-button
        >
        <rux-button>Standard button</rux-button>
      </li>
      <li>
        <rux-button icon="settings">Standard button with icon</rux-button>
      </li>
      <li>
        <rux-button icon-only disabled icon="settings"
          >Standard disabled icon-only button</rux-button
        >
        <rux-button disabled>Standard disabled button</rux-button>
      </li>
      <li>
        <rux-button disabled icon="settings"
          >Standard disabled button with icon</rux-button
        >
      </li>
      <li>
        <rux-button icon-only secondary icon="settings"
          >Standard secondary icon-only button</rux-button
        >
        <rux-button secondary>Standard secondary button</rux-button>
      </li>
      <li>
        <rux-button secondary icon="settings"
          >Standard secondary button with icon</rux-button
        >
      </li>
      <li>
        <rux-button icon-only disabled secondary icon="settings"
          >Standard disabled secondary icon-only button</rux-button
        >
        <rux-button secondary disabled
          >Standard disabled secondary button</rux-button
        >
      </li>
      <li>
        <rux-button secondary disabled icon="settings"
          >Standard disabled secondary button with icon</rux-button
        >
      </li>
    </ul>
    <ul class="button-list">
      <li>
        <rux-button size="large" icon-only icon="settings"
          >Large icon-only button</rux-button
        >
        <rux-button size="large">Large button</rux-button>
      </li>
      <li>
        <rux-button size="large" icon="settings"
          >Large button with icon</rux-button
        >
      </li>
      <li>
        <rux-button size="large" icon-only disabled icon="settings"
          >Large disabled icon-only button</rux-button
        >
        <rux-button size="large" disabled>Large disabled button</rux-button>
      </li>
      <li>
        <rux-button size="large" disabled icon="settings"
          >Large disabled button with icon</rux-button
        >
      </li>
      <li>
        <rux-button size="large" icon-only secondary icon="settings"
          >Large secondary icon-only button</rux-button
        >
        <rux-button size="large" secondary>Large secondary button</rux-button>
      </li>
      <li>
        <rux-button size="large" secondary icon="settings"
          >Large secondary button with icon</rux-button
        >
      </li>
      <li>
        <rux-button size="large" icon-only disabled secondary icon="settings"
          >Large disabled secondary icon-only button</rux-button
        >
        <rux-button size="large" secondary disabled
          >Large disabled secondary button</rux-button
        >
      </li>
      <li>
        <rux-button size="large" secondary disabled icon="settings"
          >Large disabled secondary button with icon</rux-button
        >
      </li>
    </ul>
  </div>
</div>

<style>
  .button-list {
    list-style-type: none;
    margin: 0 1rem 0 0;
    padding: 0;
    display: flex;
    flex-flow: column;
  }
  .button-list li {
    margin: 0 1rem 1rem 0;
    display: flex;
  }
  .button-list li rux-button:not(:last-child) {
    margin-right: 1rem;
  }
</style>
