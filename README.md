# X (Twitter) Quotes
<div style="display: flex; align-items: center; justify-content: space-between; max-height: 400px; margin-bottom: 30px" >
  <img src="/public/github/tweet.png" alt="Tela tweet selecionado da extensão" style="margin-right: 20px; max-height: 400px";  />
  <img src="/public/github/tweet-saved.png" alt="Tweet selecionado e salvo com o favorito" style="margin-right: 20px; max-height: 400px;" />
  <img src="/public/github/tweet-favorites.png" alt="Listagem de tweets favoritados" style="max-height: 400px" />
</div>
<p>
  Recentemente o X (Twitter) recebeu algumas novas atualizações, onde não é mais possível
  verificar o quote de um tweet. Para resolver esse problema, desenvolvi essa extensão
  onde é possível vizualizar o quote de um tweet em uma nova aba.
</p>

## Como instalar?
1. Faça o clone do repositório.
2. Entre na pasta do repositório clonado, abra o terminal e execute o seguinte comando: `yarn`.
3. Após instalar as dependencias, execute o seguinte comando: `yarn build` e pode fechar o terminal e a pasta do repositório.
4. Abra um navegador e digite **chrome://extensions** na url.
5. Clique em **Modo do desenvolvedor**.
6. E selecione a opção **Carregar sem compactação**.
7. Selecione a pasta do repositório clonado (a pasta completa).
8. A extensão será adicionada ao menu de extensões e agora basta usar!

## Como usar?
1. Abra o tweet que deseja ver o quote.
2. Clique no menu de extensões do navegador.
3. Clique na extensão X Quotes.
4. Clique no botão "Ver Quotes" para abrir os quotes do tweet.
5. Clique no Icon de Estrela (em amarelo) para favoritar um tweet.
6. Clique no Icon de Favoritos (Canto superior Direito, em vermelho) para ver todos os tweets favoritados.

## Funcionalidades
- [x] Verificar o quote de um tweet.
- [x] Listagem de todos os tweets favoritados.
- [x] Adicionar/Remover um tweet como favorito.
- [x] Exibir informações do autor do tweet (nome, username e avatar).
- [x] Exibir conteúdo do tweet e estatisticas (comentários, retweets, likes e salvos).

## Melhorias
- [] Implementar suporte a imagem/emoji.
- [] Implementar views do tweet como estatisticas.
- [] Refatorar funcionalidades de buscar o tweet selecionado.
- [] Implementar funcionalidade de pesquisa tweet salvos a partir do nome do autor.