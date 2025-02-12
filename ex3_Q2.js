function listWorldCupYears() {
    let list  = document.getElementById('worldCupYears');
    list.innerHTML = "";
    for(let years = 2022; years <= 2050; years += 4){
        let li = document.createElement('li');
        li.textContent = years;
        list.appendChild(li);
    }
}
