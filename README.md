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
npm.cmd run build
npm.cmd run typecheck
```

O build estático é gerado na pasta `out/`.

## Verificações automáticas

O GitHub Actions usa Node.js 24 e executa `npm ci`, lint, build e typecheck nessa ordem em pull requests para `main` e em pushes na `main`. O build gera os tipos do Next.js antes da verificação de tipos.

O npm audit aponta um aviso moderado pendente na cadeia de dependências de desenvolvimento do ESLint.
