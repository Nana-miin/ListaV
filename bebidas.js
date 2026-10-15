// Diccionario con todas las bebidas del menú clasificadas
const menuBebidas = {
    "Tragos Clásicos": [
        "Fernet con Coca", "Baileys con Helado", "Lemon Champ", "Cuba Libre", 
        "Daiquiri", "Campari", "Jagermeister", "Cynar", "Hodlmoser", "Gancia", 
        "Whiscola", "Sex on the Beach", "Aperol Spritz", "Negroni", "Destornillador", "Vermut"
    ],
    "Tragos de Autor": [
        "Caipiroska", "Mojito", "Cream Coffee", "Beso de Verano", "Pomelo Fizz", 
        "Calipso", "Blue Tonic", "Luna Azul", "Katrina", "La Negrita", "Tinto de Ockulta", 
        "Tinto en Jarra", "Malibú", "Black Tonic", "Ferroviario"
    ],
    "Gin Tonic Tirados": [
        "Naranja, Kiwi o Pepino", "Frutos Rojos o Maracuyá", "Pomelo"
    ],
    "Birrita Tirada": [
        "IPA - Pinta", "IPA - 1/2 Pinta",
        "Boston - Pinta", "Boston - 1/2 Pinta",
        "Irish - Pinta", "Irish - 1/2 Pinta",
        "Liso - Pinta", "Liso - 1/2 Pinta",
        "Wipa - Pinta", "Wipa - 1/2 Pinta",
        "Liso Negro - Pinta", "Liso Negro - 1/2 Pinta"
    ],
    "Whisky": [
        "Jack Daniel's", "Red Label", "White Horse"
    ],
    "Vinos y Espumantes": [
        "Trumpeter Malbec", "Elementos", "Cordero con Piel de Lobo", "Otro Loco Más", 
        "Santa Julia Chenin", "Chandon Delice", "Chandon Extra Brut", "Chandon Cuvee Brut", 
        "Nature", "Barón B"
    ],
    "Sin Alcohol": [
        "Coca Cola / Zero", "Sprite / Fanta", "Agua Saborizada", "Agua Mineral", 
        "Limonada", "Jarra Limonada", "Limo Frutos Rojos", "Soda", "Jugo de Naranja", 
        "Paso de los Toros Tónica", "Paso de los Toros Pomelo", "Speed", "Red Bull"
    ]
};

// Función para inicializar el menú en la web
function inicializarMenuBebidas() {
    const contenedorCategorias = document.getElementById('categoriasWrapper');
    const selectBebida = document.getElementById('bebida');
    
    // Crear botones de categorías dinámicamente
    let esPrimera = true;
    for (const categoria in menuBebidas) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn-categoria';
        btn.innerText = categoria;
        
        btn.onclick = function() {
            // Sacar clase activa de todos los botones
            document.querySelectorAll('.btn-categoria').forEach(b => b.classList.remove('activa'));
            // Agregar clase activa al botón clickeado
            this.classList.add('activa');
            // Cargar las bebidas de esa categoría
            cargarBebidasEnSelect(categoria, selectBebida);
        };

        contenedorCategorias.appendChild(btn);

        // Seleccionar la primera categoría por defecto al cargar
        if (esPrimera) {
            btn.classList.add('activa');
            cargarBebidasEnSelect(categoria, selectBebida);
            esPrimera = false;
        }
    }
}

// Función para poblar el <select> según la categoría elegida
function cargarBebidasEnSelect(categoria, selectBebida) {
    selectBebida.innerHTML = '<option value="">Elegí una opción...</option>'; // Limpiar opciones
    const bebidas = menuBebidas[categoria];
    
    bebidas.forEach(bebida => {
        const option = document.createElement('option');
        option.value = bebida;
        option.innerText = bebida;
        selectBebida.appendChild(option);
    });
}

// Ejecutar cuando el HTML termine de cargar
document.addEventListener('DOMContentLoaded', inicializarMenuBebidas);
