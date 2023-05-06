
const tableBody = document.querySelector(".table tbody");
const searchInput = document.querySelector("#inputtext");
const searchButton = document.querySelector("#search-button");
const sortButtons = document.querySelectorAll(".sort-button");

// fetch('MOCK_DATA.json')
//   .then(response => response.json())
//   .then(data =>{
    
//     let datas = data;
//     console.log(datas);
//     displayData(datas);
//   })
//   .catch(error => console.error(error));

let studentsData = [];

async function fetchStudentsData() {
  const response = await fetch("MOCK_DATA.json");
  const data = await response.json();
  studentsData = data.students;
  displayData(studentsData);
}

  function displayData(datas){
    htmlData=``
    for(let data of datas){
      htmlData=`
        <tr>
        <td> ${data.id} </td>
        <td> ${data.first_name} ${data.last_name}  </td>
        <td> ${data.gender} </td>
        <td> ${data.class} </td>
        <td> ${data.marks} </td>
        <td> ${data.passing} </td>
        <td> ${data.email} </td>
        </tr>
      `
      result.innerHTML += htmlData
    }
  }
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const filteredData = datas.filter((student) => {
    return (
      student.first_name.toLowerCase().includes(searchTerm) ||
      student.last_name.toLowerCase().includes(searchTerm) ||
      student.email.toLowerCase().includes(searchTerm)
    );
  });
  displayData(filteredData);
});
