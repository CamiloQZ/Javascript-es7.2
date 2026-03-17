// Valida que un string no esté vacío, si lo está lanza un error
export function toNonEmptyString(str) {
  if (typeof str !== "string") {
    throw new Error("El valor debe ser un string");
  }

  const trimmed = str.trim();

  if (trimmed.length === 0) {
    throw new Error("El string no puede estar vacío");
  }

  return trimmed;
}

// Convierte un string a Title Case (cada palabra con mayúscula inicial)
export function titleCase(str) {
  const validStr = toNonEmptyString(str);

  return validStr
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Convierte un string a slug (ej: "hola mundo" -> "hola-mundo")
export function slugify(str) {
  const validStr = toNonEmptyString(str);

  return validStr
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // elimina caracteres especiales
    .replace(/\s+/g, "-")     // reemplaza espacios por -
    .replace(/-+/g, "-");     // evita múltiples -
}