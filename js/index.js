document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../json/fathur.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-fathur");
      const kelasElement = document.getElementById("kelas-fathur");
      const npmElement = document.getElementById("npm-fathur");
      const kontakElement = document.getElementById("kontak-fathur");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      kontakElement.textContent = userData.Kontak;

    } catch (error) {
      console.error('Error:', error);
    }
  });