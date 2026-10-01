# Charles Veículos — Landing Page

Landing page da **Charles Veículos & Locadora**, loja de seminovos em Anápolis (GO). O site mostra o estoque e leva o visitante direto ao WhatsApp da loja.

![Preview](src/app/opengraph-image.jpg)

## Funcionalidades

- **Vitrine de estoque:** 21 veículos reais com foto, ano, km, motor, câmbio e preço.
- **Filtros e ordenação:** por marca, faixa de preço e câmbio; ordena por preço, ano e km.
- **Página por veículo** (`/estoque/[id]`): ficha completa, galeria e imagem Open Graph própria (foto + preço) para o preview do link no WhatsApp.
- **CTAs de WhatsApp:** cada carro e cada benefício abre o WhatsApp com mensagem pronta.
- **Rastreamento no GA4:** evento `whatsapp_click` com origem e carro clicado.
- **FAQ** e **horário de funcionamento** com selo "Aberto agora".
- **SEO:** `sitemap.xml` e `robots.txt` gerados.
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

## Variáveis de ambiente

Copie `.env.example` para `.env.local`.

| Variável | Para quê |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Domínio de produção (sitemap, canonical e imagens Open Graph) |
| `NEXT_PUBLIC_GA_ID` | ID de medição do GA4 (`G-XXXXXXX`). Vazio = analytics desligado |

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
│   ├── store.ts          # endereço, mapa e horário de funcionamento
│   ├── faq.ts            # perguntas frequentes
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
- `gallery` é opcional: lista de fotos extras (`["/cars/onix-lt2-2.jpg"]`) exibidas na página do veículo.
- O contador de "Carros no estoque" atualiza sozinho.

Para trocar o número de WhatsApp ou o Instagram, edite `src/lib/whatsapp.ts`.

## Deploy

O projeto é gerado de forma estática (todas as páginas de veículos incluídas). Funciona na [Vercel](https://vercel.com) sem configuração extra.

Antes do deploy, defina `NEXT_PUBLIC_SITE_URL` (e `NEXT_PUBLIC_GA_ID`) nas variáveis de ambiente da Vercel. Sem a URL do site, a imagem Open Graph não aparece no preview de links.
