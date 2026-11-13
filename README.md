# Portfólio de João

Base do portfólio profissional, desenvolvida com Next.js e exportação estática.

No PowerShell, instale as dependências e inicie o servidor de desenvolvimento:

```powershell
npm.cmd install
npm.cmd run dev
```

Acesse http://localhost:3000. Para verificar o projeto e gerar a versão de produção:

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

O build estático é gerado na pasta `out/`.

O npm audit aponta um aviso moderado pendente na cadeia de dependências de desenvolvimento do ESLint.
