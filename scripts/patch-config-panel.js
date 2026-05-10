const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../apps/orderquestionnaire/src/components/ConfigPanel.jsx');
let content = fs.readFileSync(file, 'utf8');

// Find and replace the handleQuickStatusChange function
// We'll use line-based replacement
const lines = content.split('\n');

// Find the start and end of the function (line 24 in 1-indexed = index 23)
let startIdx = -1;
let endIdx = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('handleQuickStatusChange = async')) {
    startIdx = i - 1; // include the comment line above
    break;
  }
}

// Find closing }; after startIdx
let braceCount = 0;
let inFunction = false;
for (let i = startIdx; i < lines.length; i++) {
  for (const ch of lines[i]) {
    if (ch === '{') { braceCount++; inFunction = true; }
    if (ch === '}') braceCount--;
  }
  if (inFunction && braceCount === 0) {
    endIdx = i;
    break;
  }
}

console.log(`Replacing lines ${startIdx + 1} to ${endIdx + 1}`);

const newFunction = `  // Status rapido: envia PUT com payload completo, so atualiza UI se a API confirmar
  const handleQuickStatusChange = async (newStatus) => {
    const confirmed = window.confirm(
      \`\u26a0\ufe0f Aten\u00e7\u00e3o!\\n\\nQualquer altera\u00e7\u00e3o n\u00e3o salva neste painel ser\u00e1 perdida.\\n\\nDeseja alterar o status para "\${newStatus}" agora?\`
    );
    if (!confirmed) return;

    try {
      let result;
      if (isQuiz) {
        result = await dataService.updateQuiz(
          data.id,
          { nome: data.nome, status: newStatus, questionsToUpsert: [], questionIdsToRemove: [] },
          data.channelDistributionId,
          data.journeyDistributionId,
          DESIGNER_FLOWS.SYNC_DESIGN
        );
      } else {
        const payload = {
          label: data.label,
          status: newStatus,
          salesItemReferenceCode: data.salesItemReferenceCode || '',
          updatedBy: {
            id: "019dff07-5f02-70d4-8680-f8dc34fd5fb9",
            referenceCode: "sys-admin",
            name: "Administrador",
            email: "admin@acme.com"
          }
        };
        result = await dataService.updatePergunta(data.id, payload, DESIGNER_FLOWS.SYNC_DESIGN);
      }
      // So atualiza o no localmente se a API confirmou (result nao nulo/falso)
      if (result !== null && result !== undefined && result !== false) {
        const newData = updateNodeConfig(node, 'status', newStatus);
        onUpdate(node.id, newData);
      }
    } catch (err) {
      console.error('Erro ao atualizar status:', err);
    }
  };`;

const newLines = [...lines.slice(0, startIdx), ...newFunction.split('\n'), ...lines.slice(endIdx + 1)];
fs.writeFileSync(file, newLines.join('\n'), 'utf8');
console.log(`Done. Total lines: ${newLines.length}`);
