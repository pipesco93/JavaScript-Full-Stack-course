let listaPelis = require('./peliculas');

for (i in listaPelis){
    for (const [key, value] of  Object.entries(listaPelis[i])){
        console.log(`${key}: ${value}`);
    }
    console.log('\n\n');
}

// otra forma
listaPelis.forEach(i => console.log(i));

