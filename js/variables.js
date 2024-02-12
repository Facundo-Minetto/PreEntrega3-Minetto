const productos = [
    {
        imagen: "../images/nikeacg.jpg",
        id: 1,
        categoria: "Buzo",
        nombre: "Hoodie Nike ACG",
        precio: 40000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 2,
        categoria: "Remera",
        nombre: "Remera Boxy Fit EMINEM",
        precio: 25000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 3,
        categoria: "Buzo",
        nombre: "Hoodie Nike Air Jordan",
        precio: 50000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 4,
        categoria: "Buzo",
        nombre: "Hoodie BALENCIAGA",
        precio: 50000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 5,
        categoria: "Buzo",
        nombre: "Hoodie Adidas ORIGINALS",
        precio: 55000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 6,
        categoria: "Remera",
        nombre: "Remera Nike ACG",
        precio: 25000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 7,
        categoria: "Remera",
        nombre: "Remera STUSSY",
        precio: 30000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 8,
        categoria: "Remera",
        nombre: "Remera FEAR OF GOD",
        precio: 40000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 9,
        categoria: "Buzo",
        nombre: "Hoodie Negro Basico",
        precio: 20000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 10,
        categoria: "Remera",
        nombre: "Remera OFF WHITE",
        precio: 35000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 11,
        categoria: "Pantalon",
        nombre: "Pantalon Baggy levis",
        precio: 30000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 12,
        categoria: "Pantalon",
        nombre: "Jean Baggy abercrombie",
        precio: 25000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 13,
        categoria: "Pantalon",
        nombre: "Jogging Nike Jordan",
        precio: 19000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 14,
        categoria: "Pantalon",
        nombre: "Pantalon Real Tree",
        precio: 30000,
    },
    {
        imagen: "../images/nikeacg.jpg",
        id: 15,
        categoria: "Gorra",
        nombre: "Gorra 'New Era'",
        precio: 20000,
    },
];


//almacenar("productos", productos)
function almacenar(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

//recuperar objeto
function recuperar(key){
    let recuperado = JSON.parse(localStorage.getItem(key));
    if(recuperado === null){
        return (recuperado = []);
    }else{
        return recuperado;
    }
}

// //agregar objeto
function agregar(key, new_element){
    let dato = recuperar(key);
    dato.push(new_element);
    almacenar(key, dato);
}