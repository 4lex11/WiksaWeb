let map;
let marker;
let geocoder;
let infowindow;

function initMap() {
    // Inicializa el mapa centrado en una ubicación por defecto
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -12.05848, lng: -77.05876 },
        zoom: 12,
    });

    // Inicializa el geocoder
    geocoder = new google.maps.Geocoder();

    // Inicializa el marcador
    marker = new google.maps.Marker({
        map: map,
        draggable: true, // Permite mover el marcador
    });

    // Inicializa la ventana de información
    infowindow = new google.maps.InfoWindow();

    // Evento para cuando el usuario mueva el marcador
    google.maps.event.addListener(marker, "dragend", function () {
        const position = marker.getPosition();
        geocodeLatLng(position);
    });

    // Configura el campo de entrada de la dirección para autocompletar
    const input = document.getElementById("address-input");
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);

    // Evento cuando el usuario selecciona una dirección
    autocomplete.addListener("place_changed", function () {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            map.setCenter(place.geometry.location);
            map.setZoom(15);
            marker.setPosition(place.geometry.location);
            infowindow.setContent(place.name);
            infowindow.open(map, marker);
        }
    });

    // Evento de búsqueda al presionar el botón
    document.getElementById("search-button").addEventListener("click", function () {
        const address = input.value;
        if (address) {
            geocodeAddress(address);
        }
    });
}

// Función para geocodificar la dirección ingresada
function geocodeAddress(address) {
    geocoder.geocode({ address: address }, function (results, status) {
        if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            map.setZoom(15);
            marker.setPosition(results[0].geometry.location);
            infowindow.setContent(results[0].formatted_address);
            infowindow.open(map, marker);
        } else {
            alert("No se pudo encontrar la dirección: " + status);
        }
    });
}

// Función para geocodificar latitud y longitud
function geocodeLatLng(latlng) {
    geocoder.geocode({ location: latlng }, function (results, status) {
        if (status === "OK") {
            if (results[0]) {
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);

                // Almacena la dirección en localStorage
                localStorage.setItem("direccion_seleccionada", results[0].formatted_address);
                localStorage.setItem("coordenadas", JSON.stringify({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                }));
            } else {
                alert("No se encontraron resultados");
            }
        } else {
            alert("Geocodificación fallida: " + status);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Verificar si SpeechRecognition está disponible
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = "es-ES"; // Idioma español
        recognition.interimResults = false; // Solo resultados finales
        recognition.continuous = false; // Detener tras reconocer un comando

        const micButton = document.getElementById("mic-button");
        const addressInput = document.getElementById("address-input");

        // Manejar eventos de reconocimiento
        recognition.onstart = () => {
            micButton.textContent = "🎙️ Escuchando...";
            micButton.disabled = true;
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            addressInput.value = transcript; // Insertar texto reconocido en el campo
            console.log("Texto reconocido:", transcript);
        };

        recognition.onerror = (event) => {
            console.error("Error de reconocimiento de voz:", event.error);
            alert("Hubo un problema al reconocer la voz. Inténtalo nuevamente.");
        };

        recognition.onend = () => {
            micButton.textContent = "Dictar";
            micButton.disabled = false;
        };

        // Evento para iniciar el reconocimiento al hacer clic en el botón
        micButton.addEventListener("click", () => {
            recognition.start();
        });
    } else {
        alert("Lo sentimos, tu navegador no soporta reconocimiento de voz.");
    }
});
