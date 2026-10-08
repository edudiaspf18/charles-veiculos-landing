// Gera src/data/blur.ts: um placeholder borrado (WebP 8 px, base64) para cada foto de public/cars.
// Uso: node scripts/gerar-blur.mjs  (rode de novo ao adicionar ou trocar fotos)
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.resolve("public/cars");
const OUT = path.resolve("src/data/blur.ts");

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const entries = [];
for (const file of files) {
  const buffer = await sharp(path.join(DIR, file)).resize(8).webp({ quality: 70 }).toBuffer();
  entries.push(`  "/cars/${file}": "data:image/webp;base64,${buffer.toString("base64")}",`);
}

const source = `// Gerado por scripts/gerar-blur.mjs. Não edite à mão.
/** Placeholder borrado (WebP 8 px em base64) por caminho de foto em public/cars. */
export const BLUR_BY_IMAGE: Record<string, string> = {
${entries.join("\n")}
};

/** Props de placeholder do next/image para a foto, quando houver blur gerado. */
export function blurProps(src: string): { placeholder: "blur"; blurDataURL: string } | { placeholder: "empty" } {
  const blurDataURL = BLUR_BY_IMAGE[src];
  return blurDataURL ? { placeholder: "blur", blurDataURL } : { placeholder: "empty" };
}
`;
await writeFile(OUT, source);
console.log(`blur gerado para ${entries.length} fotos em ${OUT}`);
