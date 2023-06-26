# Gerador de Paleta de Cores

Este é um web-app que permite aos usuários gerar uma paleta de cores com base em uma cor hexadecimal fornecida. O aplicativo é projetado para facilitar a criação de paletas de cores personalizadas.

## Como executar o aplicativo

Para executar o aplicativo acesse:

https://gerador-paleta-cores.vercel.app/

Insira a sua cor em Hexadecimal ou escolha no seletor de cores e clique em confirmar.

Caso queira copiar alguma cor, basta clicar em cima dela !

## Tecnologias Utilizadas

O aplicativo foi desenvolvido utilizando as seguintes tecnologias:

- React.js

## Funcionalidades

1. Inserção da cor hexadecimal:
   - O usuário pode inserir uma cor hexadecimal diretamente em um campo de texto.
   - Também é possível escolher uma cor usando o seletor de cores embutido clicando no botão de cores.
   - Após a seleção da cor, o usuário precisa clicar em "Confirmar" para prosseguir.

2. Renderização da paleta de cores:
   - Após clicar em "Confirmar", a paleta de cores desejada é renderizada na interface do usuário (UI).
   - A paleta de cores é gerada com base na cor fornecida pelo usuário.
   - A paleta inclui cores que variam em intervalos de 10% tanto para tons mais escuros quanto para tons mais claros em relação à cor base.

3. Copiar cores:
   - O usuário pode copiar uma cor hexadecimal simplesmente clicando nela.
   - Ao clicar na cor desejada da paleta, a cor hexadecimal correspondente é copiada automaticamente para a área de transferência.

4. Tratamento de erros:
   - Se o usuário fornecer uma cor inválida ou inexistente, uma mensagem de erro será exibida para alertá-lo.






