var filmovi = [
    {
        odgledan: 'Jeste',
        naziv: "Snowden",
        godina: 2016,
        drzava: "SAD",
        napomena: "jako zanimljiv film",
        glumci: ['Edward Snowden']
    },
    {
        odgledan: 'Nije',
        naziv: "Titanic",
        godina: 1998,
        drzava: "SAD",
        napomena: "Moram pogledati",
        glumci: ['Leonardo DiCaprio', ' Kate Winslet ', ' Billy Zane ']
    },
    {
        odgledan: 'Jeste',
        naziv: "Home Alone 2",
        godina: 2016,
        drzava: 'SAD',
        napomena: "sjajna komedija...",
        glumci: ['Macaulay Culkin', ' Joe Pesci', ' Daniel Stern']
    }
];

function displayMoviesAsTables() {
    let tableWrapper = document.getElementById('tableWrapper');
    let tableContent = '';
    filmovi.forEach((film) => {
        tableContent += ` <tr>
        <td>${film.odgledan}</td>
        <td>${film.naziv}</td>
        <td>${film.godina}</td>
        <td>${film.drzava}</td>
        <td>${film.napomena}</td>
        <td>${film.glumci}</td>
        </tr>
        `
    })
    tableWrapper.innerHTML = tableContent;
};
displayMoviesAsTables();

function getUserInputs() {
    let rezultat = '';
    if (document.getElementById('odgledanoCheck').checked == false) {
        rezultat = 'Nije';
    } else {
        rezultat = 'Jeste';
    }
    let odgledanI = rezultat;
    let nazivI = document.getElementById('nazivFilma').value;
    let godinaI = document.getElementById('godinaInput').value;
    let drzavaI = document.getElementById('drzavaInput').value;
    let napomenaI = document.getElementById('napomenaInput').value;
    let glumci = document.getElementById('glumciInput').value;
    let glumciArray = glumci.split(',')
    let glumciI = [];
    glumciI.push(glumciArray);
    if (!validate(nazivI, godinaI, glumciI)) {
        return false;
    } else {
        return {
            odgledan: odgledanI,
            naziv: nazivI,
            godina: godinaI,
            drzava: drzavaI,
            napomena: napomenaI,
            glumci: glumciI
        }
    }
}
function clearInputs() {
    document.getElementById('forma').reset();
}

function addNewMovie() {
    let userInputs = getUserInputs();
    if (userInputs == false) {

    } else {
        let newMovie = getUserInputs();
        filmovi.push(newMovie);
        displayMoviesAsTables();
        clearInputs();
    }
}
document.getElementById('forma').addEventListener('submit', (e) => {
    e.preventDefault();
    addNewMovie();
})

function validate(nazivI, godinaI, glumciI,) {
    let rezultat = true;
    let inputi = document.getElementsByClassName('inputi');
    let nazivText = '';
    let godinaText = '';
    let glumciText = '';
    let inputs = document.getElementsByClassName('inputi');
    for (let input of inputs) {
        input.classList.remove('is-invalid');
    }
    if (nazivI == '') {
        rezultat = false;
        nazivText = "<b>Morate unjeti naziv filma!</b>"
        document.getElementById('nazivFilma').classList.add("is-invalid")
    }
    if (godinaI < 1930 || godinaI > 2021) {
        godinaText = '<b>Godina mora biti izmedju 1930. i 2021.!!!</b>'
        rezultat = false;
        document.getElementById('godinaInput').classList.add("is-invalid")
    }
    if (glumciI[0] == '') {
        glumciText = '<b>Morate unjeti makar jednog glumca!</b>'
        rezultat = false;
        document.getElementById('glumciInput').classList.add("is-invalid")
    }
    document.getElementById('porukaJSsNaziv').innerHTML = nazivText;
    document.getElementById('porukaJsGodina').innerHTML = godinaText;
    document.getElementById('porukaJsGlumci').innerHTML = glumciText;


    return rezultat;
}

