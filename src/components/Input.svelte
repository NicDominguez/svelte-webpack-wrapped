<script>
</script>

<div style="padding: 10%; display: flex; justify-content: center;">
  <div class="grid">
    <rux-input-field label="Text Input" type="text" placeholder="Text input" />
    <rux-input-field label="Number Input" type="number" placeholder="1" />
    <rux-input-field
      label="Phone Input"
      type="tel"
      placeholder="(999) 999-9999"
    />
    <rux-input-field
      label="Password Input"
      type="password"
      placeholder="Reindeer Flotilla"
    />
    <rux-input-field
      label="Web address"
      type="url"
      placeholder="http://example.com"
    />
    <rux-input-field
      label="Email"
      type="email"
      placeholder="user@example.com"
    />
    <rux-input-field
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
