let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

let languages = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];

alert(languages);

function add(x, y, z) {
    alert(x + y + z);
}

let numbers = [1, 2 ,3];

add(...numbers);