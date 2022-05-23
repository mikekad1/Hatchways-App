function fetchData() {
    fetch('https://api.hatchways.io/assessment/students')
    .then(res => {
        if (!res.ok) {
            throw Error("ERROR");
        }
        return res.json();
    })
    .then(data => {
        const average = () => {
              let avg = 0;
              let len = data.grades.length;
              data.grades.forEach((i) => {
                avg = avg + parseInt(i);
              });
              let ans = avg / len;
              return ans;
            }
        const html = data.students.map(user => {
            return `
            <img src="${user.pic}">
            <h2>${user.firstName}  ${user.lastName}</h2>
            <p>Email: ${user.email}</p>
            <p>Company: ${user.company}</p>
            <p>Skill: ${user.skill}</p>
            
            <p>Average: ${average()}% </p>
            `
        })
        .join("");
        document.querySelector('#list').insertAdjacentHTML('afterbegin',html);
    })
    .catch(error => {
        console.log(error);
    });
    
}

fetchData();