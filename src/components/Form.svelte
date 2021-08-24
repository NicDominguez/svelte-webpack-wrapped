<script>
  let nativeInputValue = "";
  let ruxInputValue = "";
  let submittedValues = null;

  const handleRuxChange = (e) => {
    ruxInputValue = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submittedValues = `native:${nativeInputValue}, rux:${ruxInputValue}`;
  };
</script>

<form on:submit={handleSubmit}>
  <input bind:value={nativeInputValue} />
  <rux-input-field value={ruxInputValue} on:input={handleRuxChange} />

  <button type="submit">Submit</button>
</form>

<h2>Native Input bound value: {nativeInputValue}</h2>
<h2>Rux Input bound value: {ruxInputValue}</h2>

<h1>Submitted Values: {submittedValues}</h1>
