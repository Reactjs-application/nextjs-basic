export function normalizeUrl(src) {
  const baseUrl = process.env.NEXT_PUBLIC_UNSPLASH;
  if (src.slice(0, 4) === "http") return new URL(src);
  else return new URL(`${baseUrl}/${src[0] === "/" ? src.slice(1) : src}`);
}

export function imageLoader({ src, width, quality }) {
  const url = normalizeUrl(src);
  const params = url.searchParams;

  params.set("auto", params.getAll("auto").join(",") || "format");
  params.set("fit", params.getAll("fit").join(",") || "max");
  params.set("w", params.getAll("w").join(",") || width.toString());

  if (quality) params.set("q", quality.toString());

  return url.href;
}
