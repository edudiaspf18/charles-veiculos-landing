export const WHATSAPP_NUMBER = "5562999641311";
export const WHATSAPP_DISPLAY = "(62) 99964-1311";
export const INSTAGRAM_URL = "https://www.instagram.com/charles_veiculos01/";

const DEFAULT_MESSAGE = "Olá! Vim pelo site da Charles Veículos e gostaria de mais informações.";

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export const kilometers = new Intl.NumberFormat("pt-BR");
