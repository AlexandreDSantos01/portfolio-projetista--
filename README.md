# Portfólio de Projetista

Versão 1.0

Site estático pronto para abrir no VS Code, editar e publicar no GitHub Pages.

## Como editar

- Troque o nome `Alexandre` no `index.html`.
- Atualize os textos de sobre, serviços, atuação e contato.
- Substitua `seuemail@exemplo.com` pelo seu e-mail.
- Substitua os links do WhatsApp por seu número no formato `https://wa.me/55DDDNUMERO`.
- Substitua `https://instagram.com/seuusuario` pelo link do seu Instagram profissional.
- Se quiser trocar o banner, coloque uma nova imagem em `assets/` e atualize o caminho no `index.html`.

## Onde colocar renders e video

Use a pasta `assets/projetos/`.

Projeto principal:

- `assets/projetos/projeto-principal/capa.jpg`
- `assets/projetos/projeto-principal/tour.mp4`
- `assets/projetos/projeto-principal/render-01.jpg`
- `assets/projetos/projeto-principal/render-02.jpg`
- `assets/projetos/projeto-principal/render-03.jpg`

Outros destaques:

- `assets/projetos/projeto-02/capa.jpg`
- `assets/projetos/projeto-03/capa.jpg`

PNG funciona normalmente. Voce pode usar `capa.png`, `render-01.png` e assim por diante.

Para video, use `tour.mp4`. Se o arquivo ficar muito pesado, a pagina pode demorar para carregar quando a pessoa apertar play. A home foi configurada para nao carregar o video automaticamente.

Use nomes sem acento e sem espaco, por exemplo `sala-integrada.png` ou `tour.mp4`.

## Como abrir

Abra o arquivo `index.html` no navegador.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie estes arquivos para o repositório.
3. No GitHub, entre em `Settings > Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve e aguarde o link publicado.
