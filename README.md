#Perfil-github-API. 👨🏻‍💻 

O Perfil Github é um 🔍 buscador de usuários do Github, desenvolvido a através da API disponibilizada pela plataforma.

Link de acesso: https://perfilgithubapi-jonathasaroucha.netlify.app/

Com esta aplicação é possível obter dados de um usuário cadastrado no GitHub. Até o momento temos 4 informações do usuário que são exibidos, tais como: 1-Repositórios | 
2-Repositórios mais acessados | 3-Seguidores | 4- Quem o usuário segue.

💻📱 Como utilizar a aplicação:

#1 - Acessando o site:

Deve acessar o link: ( https://perfilgithubapi-jonathasaroucha.netlify.app/ ) Em seguida, deve-se fazer uma pesquisa que pode ser realizada apenas de uma forma até o momento, que é através do campo (input) de busca presente na página principal. Ao digitar o nome do usuário, será feita a verificação se o mesmo é um usuário existente, caso sim, em seguida mostrará seu perfil, caso não, um alerta será emitido! Após a exibição do perfil, haverão 4 informações do usuário que te levarão para suas próprias telas( 1- Repositórios | 2- Mais visitados | 3- Seguidores | 4- Seguindo.)  Após o clique em uma das 4 opções, você poderá visualizar as informações em uma outra tela e poderá clicar nas informações para ser redirecionado para a plataforma do Github. Haverão botões para facilitar a navegação tanto pra mobile quanto para desktop.

#2 - Baixando os arquivos:

Para baixar os arquivos você vai precisar clicar no botão verde "Code" e fazer o "Download ZIP". Assim que o arquivo baixar você vai precisar extrair os arquivos, então com o botão direito do mouse você escolhe qual forma de extrair os arquivos é melhor pra você, após isso, você entra na pasta principal, clica com o botão direito do mouse e escolhe a opção "Abrir com Code" para abrir o arquivo no VScode. Após isso, você vai precisar instalar o node_modules, então na parte superior do VScode, tem um nome chamado "terminal" ao lado de "help", você clica em "terminal", em seguida clica em "new terminal" e abrirá uma linha de comando. você vai digitar o seguinte comando: "npm install node-modules" ou "npx install node-modules"; após isso, será feita a instalação do node_modules, quando concluido, no mesmo terminal você digita "npm start" e sua aplicação será renderizada e terá início de forma imediata.

🚩 Ainda serão acrescentadas novas funcionalidades para que o usuário possa ter uma experiência completa usando essa aplicação, como: Melhores rotas na aplicação para acesso através até da barra de navegação( Já possui arquivo de rascunho em andamento ) | Mais informações dos usuários exibidos em na tela | Um melhor design com possibilidade de escolher temas dark ou white. 
O projeto esta oficialmente lançado e aos poucos serão acrescentadas as mudanças(Acompanhem... 😄)

#Prints das telas da aplicação:
![PerfilGithubApi (1)](https://user-images.githubusercontent.com/77129503/135737553-594070f0-ae0b-4e6a-88a3-076f16ac4cc2.png)
![PerfilGithubApi (2)](https://user-images.githubusercontent.com/77129503/135737554-5f50f948-e121-41a0-852c-7c1e96c56380.png)
![PerfilGithubApi (3)](https://user-images.githubusercontent.com/77129503/135737556-19b3bde1-4af5-44b6-9a5e-8107e4bbf8fa.png)
![PerfilGithubApi (4)](https://user-images.githubusercontent.com/77129503/135737557-071b1e0e-2002-4674-a794-57545965f4b9.png)
![PerfilGithubApi (5)](https://user-images.githubusercontent.com/77129503/135737558-a28daad9-e842-430c-a6e4-cadc8eedf606.png)
![PerfilGithubApi (6)](https://user-images.githubusercontent.com/77129503/135737689-66f59ae9-d668-4607-9f5a-95dab3256641.png)


<p float="left">
  <img src="https://user-images.githubusercontent.com/77129503/135737601-f3ad13f7-3b9f-449e-a6ba-3b4a485a0ca4.jpeg" width="260" />
  <img src="https://user-images.githubusercontent.com/77129503/135737602-9917eb2d-d9c6-4421-b7e4-3c2897557622.jpeg" width="260" />
  <img src="https://user-images.githubusercontent.com/77129503/135737603-161f2056-0d77-442d-8894-0fdeabaa4682.jpeg" width="260" />

</p>
<p float="left">
  <img src="https://user-images.githubusercontent.com/77129503/135737642-8da44065-821e-48dc-b53e-10d947195869.jpeg" width="260" />
  <img src="https://user-images.githubusercontent.com/77129503/135737644-c1f49a7c-dc42-4a52-aba7-8bbc03448afb.jpeg" width="260" />
  <img src="https://user-images.githubusercontent.com/77129503/135737645-00ef77e3-6b8d-4a04-b8af-226dcc534449.jpeg" width="260" />

</p>

📚 Tecnologias e Bibliotecas utilizadas no desenvolvimento desta aplicação:

ReactJS,
JS,
HTML,
CSS,
React-router-dom,
React-Icon,
Context,
Axios,
Styled-components.

📄 Páginas Principais:

Home: Página principal.
Header: Input de busca e renderização do profile do usuário encontrado.
userNumbers: Detalhes de utilização do github do usuário pesquisado e listagem de informações.
Routes: Página onde se encontram todas as rotas.

📱 Responsividade:

As telas encontram-se responsivas, utilizando media queries no styled-components.
