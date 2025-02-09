document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };
    console.log(data);
    const response = await fetch("/mail/node.js", {

        method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("E-posten ble sendt!");
      formData.reset();
    } else {
      alert("Feil ved sending av e-posten.");

    }
  });