# ToDo

> `git init`

- [x] EditorConfig - All (custom)
> create file .editorconfig

- [x] TypeScript - Web [PLUG]
> `yarn add -D typescript @types/node`  
> `tsc --init` configurado  
> `yarn add -D tsconfig-paths`  

- [x] ESLint - JS / Web
> `yarn add -D eslint`  
> add "lint: eslint --max-warnings=0" script to package.json  
> add "lint:fix: yarn lint --fix" script to package.json  
> `yarn lint --init`  
> create .eslintignore  
> `yarn add -D @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest`  

- [x] Prettier - All (custom)
> `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`  
> add lines to .eslintrc.json
> create .prettierignore

- [x] vscode settings.json - All (custom)

- [x] husky - All
> `yarn add -D husky`  
> `yarn husky install`   

- [x] lint-staged - All
> `yarn add -D lint-staged`  
> `yarn husky add .husky/pre-commit "yarn lint-staged"`  

- [x] commitlint - All (aprimorar na startup)
> `yarn add -D @commitlint/cli @commitlint/config-conventional`  
> `yarn husky add .husky/commit-msg "yarn commitlint --edit $1"`  

- [x] commitizen - All
> `npx commitizen init cz-conventional-changelog --save-dev --save-exact`  
> add script "git cz" to package.json  

- [ ] ~~standard-version - All~~
> ~~`yarn add -D standard-version`~~   
> ~~`npx json-merger -p merge-package.json -o package.json`~~  

- [x] Jest - All
> `yarn add -D jest`  
> `yarn add -D ts-jest @types/jest`
> ~~`yarn jest --init`~~  
> OR  
> create jest.config.js file

- [~] .github (Actions and Workflows) - All ~ lint:fix, tests
> Turn on a setting in your repository to "Require status checks to pass before merging," and selecting your workflow as required.
- [~] Git Flow (branches)
- [x] Dependabot (auto merge) 
> Create dependabot.yml file

- [ ] ~~.env - All~~
- [x] .gitignore - All
- [x] LICENSE - All
- [x] README.md - All
- [x] SECURITY.md
- [x] AUTHORS.md - All
- [x] CONTRIBUTING.md - All
- [x] CODE_OF_CONDUCT.md
- [x] ISSUE_TEMPLATEs (BUG_REPORT.md, FEATURE_REQUEST.md)
- [x] PULL_REQUEST_TEMPLATE.md

- [ ] ~~Babel - Frontend?~~
> `yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver`  
> create babel.config.js file
- [ ] ~~Nodemon?~~

- [x] NPM Package (unpublish pacote de teste)
- [ ] ~~.npmignore - NPM~~
- [x] .npmrc - NPM 

- [ ] semantic-release - All - Capitalized CHANGELOG? - (bump, changelog, TRADUZIR, release notes, git, npm, ci, ALPHA / BETA / RC)
> `npx semantic-release-cli setup`  
> change semantic-release script  
> OR  
> ~~`yarn add -D semantic-release @semantic-release/changelog @semantic-release/git`~~  
> ~~create .releaserc.json~~  
> ~~create .env com GITHUB_TOKEN~~ 

- [x] package.json scripts
- [ ] ~~VSCode Extensions~~
- [ ] Criar branch dev e qa quando finalizado (pois usa no template)

## DÚVIDAS
- [x] testar criação de NPM project
- [x] testar instalar um pacote quando já está instalado (semantic-release install)
- [x] testar husky com função true ou false
- [ ] Entender commitlint para merge, squash e afins (conventional)
- [ ] semantic-release quando n tem fix ou feat
- [ ] Entender PRs que mudam testes

## ADICIONAIS PESSOAL (desenvolver)
- [ ] auto-detect commit language no husky (desenvolver)
- [ ] Atualizar SECURITY.md ao mudar versões e AUTHORS para contribuições

## ADICIONAIS STARTUP (desenvolver)
- [ ] auto-translate CHANGELOG.md e RELEASE-NOTES.md com o semantic-release
- [ ] testdoc para README técnico? - Jest e semantic-release + translate?
- [ ] Actions para iniciar PR em outros repos

## GITHUB REPO
- [ ] Barrar push que não passem nos testes (Branch Rules)
- [ ] Adicionar descrição e tags no repositório
- [ ] Adicionar secret do NPM?

## GITHUB PROJECTS
- [ ] GitHub projects template?
- [ ] GitHub Workflow for Issues e PRs
- [ ] Criar projeto com template pronto
- [ ] Criar tags customizadas

# Future Projects

- Boilerplate Web Sem TS
- Boilerplate Web Docker?
- Boilerplate NPM
- Boilerplate VSCode Extension
