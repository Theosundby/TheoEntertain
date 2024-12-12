document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const name = document.getElementById("navn").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("melding").value;
  
    if (name && email && message) {
      alert(`Tusen takk, ${name}! Din melding er blitt sendt.`);
      document.getElementById("contact-form").reset();
    } else {
      alert("Venligst fyll ut alle feltene.");
    }
  });
  