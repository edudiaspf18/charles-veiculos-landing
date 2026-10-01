# Charles Veículos — Landing Page

Landing page da **Charles Veículos & Locadora**, loja de seminovos em Anápolis (GO). O site mostra o estoque e leva o visitante direto ao WhatsApp da loja.

![Preview](src/app/opengraph-image.jpg)

## Funcionalidades

- **Vitrine de estoque:** 21 veículos reais com foto, ano, km, motor, câmbio e preço.
- **CTAs de WhatsApp:** cada carro e cada benefício abre o WhatsApp com mensagem pronta.
- **Botão flutuante de WhatsApp** visível em toda a página.
- **Localização:** mapa do Google Maps com a loja física.
- **Metadados sociais:** ícones do app e imagem Open Graph para preview de link.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components)
- React 19 + TypeScript
- Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com)
- Ícones [lucide-react](https://lucide.dev)
- ESLint com regras próprias de qualidade (máximo de 350 linhas por arquivo)

## Como rodar

Requisito: Node.js 20+.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Serve o build de produção |
| `npm run lint` | ESLint |
| `npm run lint:types` | ESLint com regras que usam tipos |
| `npm run typecheck` | Checagem de tipos (`tsc --noEmit`) |

## Estrutura

```
src/
├── app/                  # layout, página, ícones e imagem Open Graph
├── components/
│   ├── landing/          # seções: header, hero, showcase, benefits, final-cta, location, footer
│   └── ui/               # componentes shadcn/ui
├── data/
│   ├── vehicles.ts       # estoque de veículos
│   └── landing.ts        # benefícios e números da home
└── lib/
    ├── whatsapp.ts       # número, links do WhatsApp e formatadores
    └── utils.ts          # cn()
public/
├── cars/                 # fotos dos veículos
└── logo-charles.png
eslint-rules/             # plugin ESLint local de qualidade
```

## Atualizar o estoque

1. Coloque a foto do carro em `public/cars/<id>.jpg`.
2. Adicione o veículo em `src/data/vehicles.ts`:

```ts
{ id: "onix-lt2", brand: "Chevrolet", model: "Onix LT2 1.0", year: "2025/25", km: 35955, engine: "1.0 Flex", transmission: "Manual", price: 72900, image: "/cars/onix-lt2.jpg" },
```

- `km` é opcional.
- `tag` é opcional e mostra um selo no card (ex.: `"Blindada"`).
- O contador de "Carros no estoque" atualiza sozinho.

Para trocar o número de WhatsApp ou o Instagram, edite `src/lib/whatsapp.ts`.

## Deploy

O projeto é 100% estático. Funciona na [Vercel](https://vercel.com) sem configuração extra.

Antes do deploy, defina `metadataBase` em `src/app/layout.tsx` com o domínio de produção. Sem ele, a imagem Open Graph não aparece no preview de links.
