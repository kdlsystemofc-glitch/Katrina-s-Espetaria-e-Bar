# PHASE 02 — CLIENT TO REFERENCE MAPPING

**Client:** Katrina's Espetaria e Bar  
**Reference Authority:** [Done Drinks](https://www.donedrinks.com/) (`docs/01-REFERENCE-LOCK.md`)  
**Status:** LOCKED — READY FOR HERO PROTOTYPE  

---

## 1. IDENTITY ADAPTATION SYSTEM

| REFERENCE IDENTITY ROLE | CLIENT REPLACEMENT | VISUAL BEHAVIOR PRESERVED |
|---|---|---|
| **Primary Palette (Coral Pink `#FF6E6C`)** | **Matte Charcoal / Deep Grill Smoke (`#121212` / `#181818`)** | High-energy background color field occupying the Hero section; dark, sophisticated steakhouse & bar atmosphere. |
| **Secondary Accent (Mustard Yellow `#FF9F00`)** | **Warm Amber Gold (`#D4AF37` / `#E5A93B`)** | High-contrast brand accent used for primary CTAs, highlight cards, and official emblem borders. |
| **Tertiary Accent (Terracotta Red `#7A3628`)** | **Deep Ruby Red (`#8B1E2B`)** | Warm organic accent derived from biquinho peppers, fresh strawberries, and premium meats. |
| **Background Neutral (Warm Cream `#FFF6EE`)** | **Warm Off-White Sand (`#FAF6F0`)** | Light, ultra-clean neutral field for Bento grids, Testimonials, and FAQ accordions. |
| **Typography Family (Bookman / Serif Display)** | **High-Contrast Script & Elegant Serif Display** | Preserves massive display headlines (`56px–88px`), decorative script flourishes, and heavy vertical visual weight. |
| **Graphic Motifs (Wave SVGs & Pill Badges)** | **Custom Wave Masks, Gold Tridents & Pill Badges** | Preserves organic wave section dividers, outline category pills, and floating circular marquee badges. |

---

## 2. SCENE-BY-SCENE CLIENT MATERIAL MAPPING

### Scene 01: Top Banner + Navigation + Hero Section
* **Reference Role:** High-impact Hero section with fixed notification bar, floating navbar, centered display headline, pill CTA, central 3-item product hero group standing on bottom wave, and a lower-left floating circular video play badge.
* **Structural Purpose:** Immediate brand authority, core product visual hook, clear service modes, and instant conversion action.
* **Client Content:**
  * Top Banner: *"Refeição no Local · Para Viagem · Entrega | Nova Petrópolis, SBC"* | Button: *"FAZER PEDIDO ->"*
  * Navbar: Official circular logo (`670577126_...jpg`), links (*Cardápio*, *Nossa História*, *Avaliações*, *Contato*), social links (`@katrinasespetariaebar`).
  * Hero Headline: *"O seu espeto artesanal favorito em São Bernardo"*
  * Hero Subtext: *"Espetos artesanais na brasa, carnes de alta qualidade, cerveja trincando e música ao vivo em um ambiente acolhedor."*
  * Hero CTA: *"VER CARDÁPIO ->"*
  * Hero Central Product Group (3-Item Composite Fan):
    1. **Center Item:** Close-up artisanal meat skewer (`imgi_33_...jpg`).
    2. **Left Item:** Craft Strawberry/Kiwi Caipirinha (`imgi_69_...jpg` / `imgi_65_...jpg`).
    3. **Right Item:** Sliced Picanha & Meat Platter (`imgi_55_...jpg`).
  * Floating Circular Badge (Bottom Left): Spinning text *"MÚSICA AO VIVO · NOTA 1000 · 5.0 ESTRELAS ·"* surrounding a central flame/grill icon.
* **Client Asset:** `670577126_...jpg` (Logo), `imgi_33_...jpg` (Skewer), `imgi_69_...jpg` (Drink), `imgi_55_...jpg` (Meat Platter).
* **Asset Transformation:** Background removal & subject isolation on the skewer, drink, and meat board to construct a seamless 3D composite group standing on the bottom hero wave divider.
* **Color Transformation:** Coral Pink (`#FF6E6C`) -> Matte Dark Charcoal (`#121212`) background with Warm Gold (`#D4AF37`) CTA button and text highlights.
* **Typography Transformation:** Display Serif `56px` centered headline with bold script accents for *"Katrina's"*.
* **Structural Change Required?** **NO.**

---

### Scene 02: Marquee Tag Ticker
* **Reference Role:** Full-bleed horizontal marquee banner scrolling rounded tag badges.
* **Structural Purpose:** Dynamic feature validation and rapid scanning of key attributes.
* **Client Content:**
  * Tag 1: `[Espetos Artesanais]`
  * Tag 2: `[Cerveja Gelada]`
  * Tag 3: `[Atendimento Nota 1000]`
  * Tag 4: `[Carnes Nobres]`
  * Tag 5: `[Refeição no Local]`
  * Tag 6: `[Música ao Vivo]`
  * Tag 7: `[Entrega & Para Viagem]`
  * Tag 8: `[5.0 Estrelas no Google]`
  * Tag 9: `[Ambiente Familiar]`
* **Client Asset:** Text data from verified Google reviews and Instagram bio.
* **Asset Transformation:** Rendered as inline CSS horizontal scroll pills with custom pill borders.
* **Color Transformation:** Alternating background colors using Warm Gold (`#D4AF37`), Deep Red (`#8B1E2B`), Amber (`#E5A93B`), and Charcoal (`#1E1E1E`).
* **Typography Transformation:** 14px uppercase bold sans-serif with letter-spacing `0.1em`.
* **Structural Change Required?** **NO.**

---

### Scene 03: Benefits Bento Grid ("NOSSA QUALIDADE")
* **Reference Role:** Asymmetric 2x2 Bento grid with rounded solid color text cards and high-definition photography cards.
* **Structural Purpose:** Showcase core pillars of value (quality meat, artisanal preparation, ambiance, hospitality).
* **Client Content:**
  * Section Eyebrow: `[NOSSA ESSÊNCIA]`
  * Section Headline: *"Qualidade de verdade que você sente no primeiro pedaço"*
  * **Card 1 (Top Left Photo):** Crispy fried chicken wings platter photo (`imgi_25_...jpg`).
  * **Card 2 (Top Right Gold Card `#D4AF37`):** Title: *"Carnes Nobres & Selecionadas"*, Subtext: *"Cortadas e grelhadas no ponto certo, trazendo o autêntico sabor do churrasco brasileiro."*
  * **Card 3 (Mid Left Dark Card `#222222`):** Title: *"Espetos Artesanais Únicos"*, Subtext: *"Preparados diariamente com temperos exclusivos, ingredientes frescos e muito carinho."*
  * **Card 4 (Mid Right Photo):** Craft caipirinha drink photo (`imgi_61_...jpg`).
  * **Card 5 (Bottom Left Photo):** French fries with cheddar & bacon (`imgi_31_...jpg`).
  * **Card 6 (Bottom Right Red Card `#8B1E2B`):** Title: *"Atendimento Nota 1000"*, Subtext: *"Ambiente acolhedor, familiar e feito com carinho para reunir amigos e família."*
* **Client Asset:** `imgi_25_...jpg`, `imgi_61_...jpg`, `imgi_31_...jpg`.
* **Asset Transformation:** High-definition crop to fit 2x2 bento card aspect ratios with `border-radius: 24px`.
* **Color Transformation:** Off-White background (`#FAF6F0`) with solid Gold, Dark Charcoal, and Ruby Red card fields.
* **Typography Transformation:** 28px display serif card titles paired with 16px clean body text.
* **Structural Change Required?** **NO.**

---

### Scene 04: Interactive Flavor Showcase ("NOSSO CARDÁPIO SELECIONADO")
* **Reference Role:** Staggered vertical cards with 3D product pedestals and individual color themes.
* **Structural Purpose:** Highlighting the 3 main menu categories (Espetos, Tábuas, Drinks).
* **Client Content:**
  * Section Eyebrow: `[NOSSO CARDÁPIO]`
  * Section Headline: *"Escolha a sua combinação perfeita"*
  * **Card A (Espetos Artesanais):** Muted Dark Brown card (`#2A1D13`). Title: *"Espetos Artesanais"*, Subtext: *"Seleção irresistível de carnes nobres, linguiças e combinações com legumes frescos."* Photo: Skewers platter (`imgi_63_...jpg`). Button: *"VER ESPETOS ->"*.
  * **Card B (Tábuas & Porções):** Warm Amber Gold card (`#C88A2B`), right offset. Title: *"Porções & Tábuas Nobres"*, Subtext: *"Picanha fatiada ao ponto, linguiça caracol recheada com provolone e porções generosas."* Photo: Spiral sausage board (`imgi_39_...jpg`). Button: *"VER TÁBUAS ->"*.
  * **Card C (Coquetelaria & Bar):** Deep Ruby Red card (`#8B1E2B`), left aligned. Title: *"Caipirinhas & Drinks Autorais"*, Subtext: *"Frutas selecionadas, borda açucarada e receitas extremamente refrescantes para o seu happy hour."* Photo: Strawberry Caipirinha (`imgi_69_...jpg`). Button: *"VER DRINKS ->"*.
* **Client Asset:** `imgi_63_...jpg`, `imgi_39_...jpg`, `imgi_69_...jpg`.
* **Asset Transformation:** Reframing and masking on wooden pedestal backgrounds matching reference product cards.
* **Color Transformation:** Warm Nude Sand background (`#FCE8DB` / `#F5EBE1`).
* **Typography Transformation:** 36px display serif titles inside cards.
* **Structural Change Required?** **NO.**

---

### Scene 05: Testimonials Slider ("AVALIAÇÕES 5.0 ESTRELAS")
* **Reference Role:** Horizontal quote carousel with rounded cards and centered circular navigation arrows.
* **Structural Purpose:** Social proof and community trust validation.
* **Client Content:**
  * Section Eyebrow: `[AVALIAÇÕES]`
  * Section Headline: *"Por que nossos clientes dão nota 1000"*
  * **Quote Card 1 (Light Gold Card):** *"Atendimento maravilhoso, a comida então nem se fala, muita qualidade na carne e nos aperitivos, ambiente nota 1000, recomendo demais!"* — **Atthus Nunes Sancho** *(Google Review)*
  * **Quote Card 2 (Warm Cream Card):** *"Ótimo local para se reunir com amigos, familiares, boa comida, boa música, bom atendimento, local planejado com carinho para atender todos."* — **Camilo Carvalho** *(Google Review)*
  * **Quote Card 3 (Light Red Card):** *"Comida extremamente saborosa. Ambiente bonito em boa localização. Bom atendimento. Voltaremos mais vezes com certeza!"* — **O Quase Nada** *(Google Review)*
* **Client Asset:** Verified Google Maps review copy from client dataset.
* **Asset Transformation:** Formatted into rounded carousel cards (`border-radius: 24px`).
* **Color Transformation:** Warm Off-White Cream background (`#FAF6F0`).
* **Typography Transformation:** 24px display serif quote typography.
* **Structural Change Required?** **NO.**

---

### Scene 06: Dark Founder Story ("NOSSA HISTÓRIA & ESPAÇO")
* **Reference Role:** Deep dark background transition with giant title ("Our Story"), yellow founder card with torso cutout overflow, subtext, highlight pill, and photo block.
* **Structural Purpose:** Storytelling, physical venue authenticity, and brand origin.
* **Client Content:**
  * Section Headline: *"Nossa História"* (Giant white display serif ~80px).
  * **Central Feature Card (Warm Gold `#D4AF37`):** Architectural photo of Katrina's facade (`imgi_17_...jpg`).
  * **Cutout Overflow:** Illuminated facade sign cutout breaking top border of card; bottom pill badge: *"Katrina's Espetaria & Bar — Nova Petrópolis, SBC"*.
  * **Narrative Body Text:** *"Criado com carinho para ser a sua parada obrigatória em São Bernardo do Campo. Um espaço acolhedor e bonito, planejado nos mínimos detalhes onde a carne de alta qualidade encontra a cerveja gelada e a boa música."*
  * **Highlight Pill Badge:** *"Refeição no Local · Para Viagem · Entrega"*.
  * **Side Photo Block:** Exterior patio and corner shot (`imgi_57_...jpg`).
* **Client Asset:** `imgi_17_...jpg` (Facade), `imgi_57_...jpg` (Patio).
* **Asset Transformation:** Facade sign subject isolation extending above the card frame; high-contrast night/day color grading.
* **Color Transformation:** Deep Dark Chocolate / Grill Charcoal (`#121212` / `#1A0F0A`) with organic wave top divider.
* **Typography Transformation:** Ultra-large display serif headline in pure white (`#FFFFFF`).
* **Structural Change Required?** **NO.**

---

### Scene 07: Interactive Timeline Journey ("A EXPERIÊNCIA KATRINA'S")
* **Reference Role:** Deep dark storytelling timeline with horizontal circular year node bar, milestone cards, rotating badge, and photo banners.
* **Structural Purpose:** Step-by-step breakdown of Katrina's commitment to quality and service.
* **Client Content:**
  * Section Headline: *"A Experiência Katrina's"*
  * **Node Bar Buttons:** `[01. Seleção]`, `[02. Grelha]`, `[03. Bar]`, `[04. Música]`, `[05. Família]`.
  * **Milestone 01:** Title: *"Seleção Diária de Carnes Nobres"* — *"Escolhemos a dedo cada corte de carne e ingrediente fresco para garantir o sabor artesanal incomparável."*
  * **Milestone 02:** Title: *"O Ponto Perfeito na Grelha"* — *"Nossos espetos e tábuas são assados no calor ideal da brasa, mantendo a suculência e o aroma irresistível."*
  * **Milestone 03:** Title: *"Coquetelaria Autoral & Cerveja Trincando"* — *"Drinks preparados com frutas frescas e cervejas servidas na temperatura perfeita para o seu happy hour."*
  * **Milestone 04:** Title: *"Música ao Vivo & Clima Acolhedor"* — *"Ambiente planejado nos mínimos detalhes para oferecer noites inesquecíveis com boa música e atendimento nota 1000."*
* **Client Asset:** Meat platter photography (`imgi_55_...jpg`) and skewer close-up (`imgi_63_...jpg`).
* **Asset Transformation:** Full-bleed horizontal photo banners integrated into timeline milestone cards.
* **Color Transformation:** Deep Dark Chocolate background (`#1A0F0A`).
* **Typography Transformation:** Bold serif milestone headlines paired with clean white sans-serif copy.
* **Structural Change Required?** **NO.**

---

### Scene 08: FAQ Accordion ("DÚVIDAS FREQUENTES")
* **Reference Role:** Stacked white pill accordion cards with right-aligned orange `+` toggle icons.
* **Structural Purpose:** Removing customer friction, confirming location, hours, service modes, and contact details.
* **Client Content:**
  * Section Eyebrow: `[DUVIDAS FREQUENTES]`
  * Section Headline: *"Perguntas Frequentes"*
  * **Q1:** *"Qual é o endereço do Katrina's Espetaria & Bar?"* -> *"Estamos na Alameda Dona Tereza Cristina, 538 - Nova Petrópolis, São Bernardo do Campo - SP, 09770-330."*
  * **Q2:** *"Quais são os horários de funcionamento?"* -> *"Aberto de Segunda a Sábado, a partir das 11:00."*
  * **Q3:** *"Vocês fazem entrega e pedidos para viagem?"* -> *"Sim! Atendemos com refeição no local, pedidos para viagem e serviço de entrega."*
  * **Q4:** *"O ambiente é adequado para famílias?"* -> *"Sim! Nosso espaço foi planejado com carinho para atender famílias, amigos e grupos de todas as idades."*
  * **Q5:** *"Tem música ao vivo no local?"* -> *"Sim! Oferecemos boa música ao vivo para embalar a sua noite com comida boa e cerveja gelada."*
  * **Q6:** *"Como entrar em contato para dúvidas ou pedidos?"* -> *"Você pode nos chamar diretamente pelo WhatsApp (11) 98836-9236."*
* **Client Asset:** Verified address, phone, hours, and service mode data.
* **Asset Transformation:** Rendered into expandable white pill cards (`border-radius: 16px`).
* **Color Transformation:** Warm Off-White Cream background (`#FAF6F0`).
* **Typography Transformation:** 18px bold serif questions with orange `+` toggle icon.
* **Structural Change Required?** **NO.**

---

### Scene 09: Amazon Purchase Banner -> Google 5.0 Star Banner
* **Reference Role:** Amazon badge logo + headline + CTA button.
* **Structural Purpose:** High-trust conversion callout.
* **Client Content:**
  * Badge: Google 5.0 Star Rating Badge (5.0 ★★★★★).
  * Headline: *"Sua parada obrigatória em São Bernardo do Campo"*
  * CTA Button: *"FALAR NO WHATSAPP ->"*
* **Client Asset:** 5.0 Google Rating data & WhatsApp link `(11) 98836-9236`.
* **Asset Transformation:** Styled badge and CTA button.
* **Color Transformation:** Warm Cream background with Gold CTA.
* **Typography Transformation:** Centered display serif text.
* **Structural Change Required?** **NO.**

---

### Scene 10: Oversized Brand Footer
* **Reference Role:** Social buttons + massive wall-to-wall 3D logotype banner + copyright.
* **Structural Purpose:** Unmistakable brand sign-off and complete footer navigation.
* **Client Content:**
  * Social Links: Instagram (`@katrinasespetariaebar`), WhatsApp, Facebook, Google Maps link.
  * Giant Logotype Banner: **"KATRINA'S ESPETARIA & BAR"** (100% full viewport width stacked display lettering).
  * Copyright Line: *"© Katrina's Espetaria & Bar 2026. Todos os direitos reservados. Al. Dona Teresa Cristina, 538 - Nova Petrópolis, SBC."*
* **Client Asset:** Katrina's logo & business name.
* **Asset Transformation:** High-impact wall-to-wall 3D stacked typography rendering.
* **Color Transformation:** Deep Dark Chocolate (`#121212` / `#1A0F0A`) with top wave divider.
* **Typography Transformation:** Custom 100vw stacked logotype font.
* **Structural Change Required?** **NO.**

---

## 3. SUMMARY & NEXT STEPS

Every piece of client content and visual material for **Katrina's Espetaria e Bar** has been mapped 1-to-1 into the locked reference architecture of **Done Drinks**.

- **Structural Changes Required:** **0 (ZERO).**
- **Architecture Integrity:** 100% preserved across all 10 visual scenes.
- **Client Adaptation:** Visual identity, real food photography, cocktail assets, facade imagery, and verified Google reviews replace the reference placeholder material while strictly maintaining spatial, geometric, and chromatic behavior.

**CLIENT MAPPING LOCKED — READY FOR HERO PROTOTYPE**
