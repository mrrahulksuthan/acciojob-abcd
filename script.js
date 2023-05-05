

fetch('MOCK_DATA.json')
  .then(response => response.json())
  .then(data =>{
    
    let datas = data;
    console.log(datas);
    displayData(datas);
  })
  .catch(error => console.error(error));

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