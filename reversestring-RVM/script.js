"use strict";

/**
 * Longitud máxima permitida para el input
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
    if (!text) return false;
    if (text.length > MAX_INPUT_LENGTH) return false;
    return true;
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
 * Maneja el evento de inversión de texto
 */
const handleReverse = () => {
    const inputElement = document.getElementById("textInput");
    const resultElement = document.getElementById("resultOutput");

    const sanitized = sanitizeInput(inputElement.value);

    if (!validateInput(sanitized)) {
        alert("Texto inválido o demasiado largo");
        return;
    }

    resultElement.value = reverseString(sanitized);
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
    document.getElementById("reverseBtn").addEventListener("click", handleReverse);
    document.getElementById("copyBtn").addEventListener("click", handleCopy);
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
};

document.addEventListener("DOMContentLoaded", init);