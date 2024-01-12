# Experiência
Falar o que eu usei primeiramente, pra deixar mais simples utilizei React Bootstrap para alguns componentes, desde o início, usei React Toastify pra notificação da finalização do Pedido
e usei Axios para fazer as chamadas dos arquivos .JSON;

No arquivo pede pra usar Ajax, não sei se isso vai ser um problema, eu tentei inicialmente com AJAX, mas tive alguns problemas, que também acontecem no Axios, até perceber que era um
problema de onde eu coloquei os arquivos .JSON, deveriam estar na pasta 'public', depois que coloquei lá o Axios funcionou, acredito que o AJAX também funcionaria, mas não testei pelo tempo, e deixei com o Axios, eu até prefiro por já está acostumado a usar anteriormente.

Eu sempre crio projetos utilizando Redux, desde que aprendi a usar Redux, nesse caso eu queria tentar não usar uma biblioteca de estados, quis usar apenas a passagem de dados entre Pai
e Filho do React, por também ser um projeto mais simples, fui por esse lado pra dificultar um pouco meu lado, e não ter variáveis que possa reutilizar em todos os componentes sem pensar se estão sendo atualizadas corretamente.

A outra coisa é como montei os arquivos, separei em Assets, Components e Pages, que é o que gosto de fazer, deixei a parte do Home com a maior parte da lógica, e nos componentes apenas 
mostrando o que é passado para eles. Tem alguns arquivos a mais que acabei não deletando que já vem no create-app.

No geral foi um bom desafio, que estou a um tempo usando apenas Angular no dia a dia, é bom pegar projetos em React pra relembrar de como é, que é bem diferente.

Abaixo tem como inicializar o projeto, já vem pronto do create-app, mas é: Clonar o repositório -> instalar as dependências com 'npm install' -> Inicializar o Projeto com 'npm start'.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
