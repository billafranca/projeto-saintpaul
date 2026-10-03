export interface DocumentoConhecimento { id: string; titulo: string; versao: string; trecho: string; categoria: 'bula' | 'diretriz' | 'protocolo' }

export const knowledgeBase: DocumentoConhecimento[] = [
  { id: 'bula-mounjaro', titulo: 'Bula ilustrativa — Mounjaro', versao: '0.1', categoria: 'bula', trecho: 'Reações gastrointestinais devem ser acompanhadas e sinais de gravidade exigem atendimento.' },
  { id: 'hidratação', titulo: 'Diretriz ilustrativa de hidratação', versao: '0.1', categoria: 'diretriz', trecho: 'A hidratação deve ser individualizada e validada por profissional.' },
  { id: 'proteina', titulo: 'Diretriz ilustrativa de proteína', versao: '0.1', categoria: 'diretriz', trecho: 'Metas de proteína são sugestões para revisão de um profissional habilitado.' },
  { id: 'protocolo-clinica', titulo: 'Protocolo da clínica — sinais de atenção', versao: '1.0', categoria: 'protocolo', trecho: 'Se náusea ≥ 4 por 2 dias, orientar contato com a clínica.' },
  ...Array.from({ length: 6 }, (_, index) => ({ id: `doc-${index + 5}`, titulo: `Documento clínico ilustrativo ${index + 5}`, versao: '0.1', categoria: 'diretriz' as const, trecho: 'Conteúdo ilustrativo, substituir por base validada por profissionais.' })),
]

export const knowledgeDisclaimer = 'Conteúdo ilustrativo, substituir por base validada por profissionais.'
