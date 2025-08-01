Você é um especialista em front-end e personalização de lojas virtuais Nuvemshop usando HTML, CSS e JavaScript.

Preciso de um script JavaScript completo que:

1️⃣ Injete dinamicamente o **Font Awesome** no `<head>` (sem editar diretamente o HTML do tema).
2️⃣ Percorra todos os itens do menu **desktop** e **mobile (hamburger)** da Nuvemshop e adicione ícones antes do texto de cada item, com base no nome (ex: "Chinelos" = ícone de pegadas, "Botas" = ícone de bota, "Crocs" = ícone de pegadas, "Tênis" = ícone de corrida, "Minhas imagens" = ícone de imagem).
3️⃣ Garanta que o script funcione em menus com subitens (dropdowns ou acordions), incluindo itens como "Tênis > Nike > Air Force".
4️⃣ Evite ícones duplicados se o script for executado mais de uma vez.
5️⃣ Adicione um **bloco de CSS inline** via JavaScript para alinhar os ícones com o texto do menu e aplicar cor e efeito hover.
6️⃣ Funcione para os seletores:

- Menu desktop: `.nav-desktop .nav-list-link`
- Menu mobile: `#nav-hamburger .nav-list-link`
  7️⃣ Seja autoexecutável e otimizado, usando `DOMContentLoaded`.

Me entregue o **código completo e pronto para uso**, dentro de uma `<script>` única, incluindo:

- A injeção do Font Awesome.
- A lógica de adição de ícones nos menus desktop e mobile.
- A estilização CSS inline para ícones.
- Comentários explicativos no código.

O objetivo final é que eu consiga simplesmente colar esse script na personalização da Nuvemshop e os ícones apareçam corretamente em ambos os menus (desktop e mobile) de forma automática.
