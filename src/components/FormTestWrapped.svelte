<script>
  import RuxInputField from "../../node_modules/astro-in-svelte/src/svelte/RuxInputField.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let logElement;
  let formElement;

  const handleSubmit = (e) => {
    // trigger formdata event
    dispatch("formdata", {
      formData: new FormData(formElement),
    });
  };

  const handleFormData = (e) => {
    console.log(e);
    logElement.innerHTML = "";
    // Get the form data from the event object
    let data = e.formData;
    const values = data.values();
    for (var value of data.entries()) {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${value[0]}:</strong>${value[1]}`;
      logElement.appendChild(item);
    }
  };
</script>

<div
  style="padding: 10%; display: flex; justify-content: center"
  on:formdata={handleFormData}
>
  <form on:submit|preventDefault={handleSubmit} bind:this={formElement}>
    <div>
      <RuxInputField label="Input Field" id="ruxInput" name="ruxInput" />
      <input type="text" id="nativeInput" name="nativeInput" />
    </div>

    <div>
      <RuxInputField
        label="Disabled with value"
        id="ruxInput2"
        name="ruxInput2"
        value="Hello World"
        disabled
      />
      <input
        type="text"
        id="nativeInput2"
        name="nativeInput2"
        value="Hello World"
        disabled
      />
    </div>

    <div>
      <RuxInputField
        label="Required"
        id="ruxInput3"
        name="ruxInput3"
        required
        help-text="Test Help Text"
      />
      <input type="text" id="nativeInput3" name="nativeInput3" />
    </div>

    <button id="formSubmitBtn" type="submit">submit</button>
  </form>
  <ul bind:this={logElement} />
</div>
