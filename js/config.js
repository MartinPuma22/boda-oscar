/* =====================================================
   TODOS LOS DATOS DE LA INVITACIÓN ESTÁN AQUÍ.
   Cambia textos, fecha o rutas de imágenes y listo.
   ===================================================== */
const BODA = {
  novia: "Nadia",
  novio: "Óscar",
  titulo: "¡Nos vamos a casar!",
  frase: "El amor es el significado último de todo lo que nos rodea. No es un simple sentimiento, es la verdad, es la alegría que está en el origen de toda creación.",

  // Fecha de la cuenta regresiva (año-mes-díaTHH:MM:SS, hora local)
  fecha: "2026-12-04T14:00:00",
  diaSemana: "Viernes", dia: "04", mes: "Diciembre",
  bendicion: "Con la bendición de Dios y de nuestros padres.",

  padresNovia: ["Roldan Rime Pumayauli", "Egna Ramírez Fernández"],
  padresNovio: ["Oscar Benjamín Andrade Valverde", "Mercy Bocanegra Villanueva"],
  padrinos: ["Luis Alberto Osorio Ramirez", "Zoila Luz Revelli Valverde"],
  testigos: ["Manuel Pedro Soto Torres", "Ana Cristina Maucaylle Prado"],

  ceremonia: {
    horarios: [["Ingreso al local", "13:00 pm"], ["Matrimonio Civil", "14:00 pm"], ["Inicio de recepción", "15:15 pm"]],
    lugar: "VILLA ROMANA / Salón de Recepciones",
    nota: "Te agradecemos mucho llegar puntual.",
    mapa: "https://maps.google.com/?q=Villa+Romana+Lima"   // enlace del botón VER MAPA
  },
  referencias: ["Jockey Plaza", "Universidad Agraria La Molina", "Universidad UCAL", "Curva de Manchay", "Paradero Tres Marías", "Portada San Judas", "Lugar de recepción"],

  vestimenta: { codigo: "ELEGANTE", hombres: "Terno", mujeres: "Vestido" },

  confirmacion: {
    texto: "Eres muy importante para nosotros por favor confirma tu asistencia hasta el 03 de Noviembre.",
    whatsapp: "51999999999",   // tu número con código de país, sin +
    mensaje: "Hola, confirmo mi asistencia a la boda de Nadia y Óscar."
  },
  regalos: "Su presencia en nuestra boda será el regalo más hermoso. Pero si insistes en tener un detallito, aceptamos \"Lluvia de Sobres\" en la celebración.",
  cierre: "Con mucha ilusión queremos vivir este momento rodeados de personas que han formado parte de nuestra historia. Será un honor contar con su presencia.",
  despedida: "¡Te esperamos!",

  // ---- Música (pon tu archivo en assets/audio/) ----
  musica: "assets/audio/musica.mp3",
  volumen: 0.6,

  // ---- Imágenes (cambia el nombre si el tuyo es distinto) ----
  img: {
    foto1: "assets/img/fotos/foto-1.jpg",
    foto2: "assets/img/fotos/foto-2.jpg",
    foto3: "assets/img/fotos/foto-3.jpg",
    flores: "assets/img/decoracion/flores.png",
    sello: "assets/img/logos/sello.png",
    vestimenta: "assets/img/decoracion/vestimenta.png",
    libro: "assets/img/decoracion/libro.png"
  },
  galeria: [
    { titulo: "Celebraciones", foto: "assets/img/galeria/celebraciones.jpg" },
    { titulo: "Aventuras",     foto: "assets/img/galeria/aventuras.jpg" },
    { titulo: "Logros",        foto: "assets/img/galeria/logros.jpg" },
    { titulo: "Momentos",      foto: "assets/img/galeria/momentos.jpg" }
  ]
};
