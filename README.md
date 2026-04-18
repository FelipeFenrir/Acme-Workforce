#Utiliza
nvm
Node


# Remove todas as pastas node_modules de uma vez
## Se estiver no PowerShell:
### No PowerShell (raiz do projeto)
Get-ChildItem -Path "." -Include "node_modules" -Recurse | Remove-Item -Recurse -Force
Remove-Item package-lock.json -Force

### Se estiver no CMD (raiz do projeto):
for /d /r . %d in (node_modules) do @if exist "%d" rd /s /q "%d"

# Instale ignorando os avisos de peer dependency (que o override resolve)
npm install --legacy-peer-deps

# Rodar a aplicação
npm run dev

