"use strict";

/**
 * Longitud mínima requerida para habilitar la acción
 * @constant {number}
 */
const MIN_INPUT_LENGTH = 4;

/**
 * Longitud máxima permitida
 * @constant {number}
 */
const MAX_INPUT_LENGTH = 200;

/**
 * Sanitiza el texto eliminando caracteres peligrosos
 * @param {string} text
 * @returns {string}
 */
const sanitizeInput = (text) => {
    return text.replace(/[<>]/g, "").trim();
};

/**
 * Valida el input del usuario
 * @param {string} text
 * @returns {boolean}
 */
const validateInput = (text) => {
    return text.length >= MIN_INPUT_LENGTH && text.length <= MAX_INPUT_LENGTH;
};

/**
 * Invierte una cadena de texto
 * @param {string} text
 * @returns {string}
 */
const reverseString = (text) => {
    return [...text].reverse().join("");
};

/**
 * Maneja la actualización en tiempo real del input
 */
const handleInputChange = () => {
    const inputElement = document.getElementById("textInput");
    const resultElement = document.getElementById("resultOutput");
    const reverseBtn = document.getElementById("reverseBtn");

    const sanitized = sanitizeInput(inputElement.value);

    // Validación dinámica
    const isValid = validateInput(sanitized);
    reverseBtn.disabled = !isValid;

    // Actualización en tiempo real
    if (isValid) {
        resultElement.value = reverseString(sanitized);
    } else {
        resultElement.value = "";
    }
};

/**
 * Mantiene compatibilidad con el botón Reverse
 */
const handleReverse = () => {
    handleInputChange();
};

/**
 * Copia el resultado al portapapeles
 */
const handleCopy = async () => {
    const resultElement = document.getElementById("resultOutput");

    if (!resultElement.value) return;

    try {
        await navigator.clipboard.writeText(resultElement.value);
        alert("Texto copiado");
    } catch (error) {
        alert("Error al copiar");
    }
};

/**
 * Alterna el tema claro/oscuro
 */
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        document.getElementById("themeToggle").textContent = "Dark Mode";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById("themeToggle").textContent = "Light Mode";
    }
};

/**
 * Inicializa los eventos de la aplicación
 */
const init = () => {
    document.getElementById("textInput").addEventListener("input", handleInputChange);
    document.getElementById("reverseBtn").addEventListener("click", handleReverse);
    document.getElementById("copyBtn").addEventListener("click", handleCopy);
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
};

document.addEventListener("DOMContentLoaded", init);