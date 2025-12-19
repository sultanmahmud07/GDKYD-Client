export const generateSlug = (text) => {
  if (!text) return "";

  return text
    .toString()
    .toLowerCase()
    .replace(/\//g, "-")        // 1. Replace slashes with hyphens ("Rain/Poncho" -> "rain-poncho")
    .replace(/\s+/g, "-")       // 2. Replace spaces with hyphens
    .replace(/[^\w-]+/g, "")    // 3. Remove non-word chars (except hyphens)
    .replace(/--+/g, "-")       // 4. Replace multiple hyphens with single one
    .replace(/^-+/, "")         // 5. Trim hyphens from start
    .replace(/-+$/, "");        // 6. Trim hyphens from end
};