export type Papel = 'paciente' | 'medico' | 'nutricionista' | 'admin'
export type ClassificacaoTriagem = 'Esperado' | 'Monitorar' | 'Procurar atendimento'
export type EscopoHistorico = 'peso' | 'sintomas' | 'nutricao' | 'relatorio_ia' | 'fotos'

export interface Usuario { id: string; nome: string; email: string; papel: Papel; cidade?: string; consentimentoSaude: boolean }
export interface Tratamento { id: string; medicamento: string; dose: string; inicio: string; historicoTitulacao: { dose: string; data: string }[] }
export interface Aplicacao { id: string; tratamentoId: string; dataPrevista: string; dataRealizada?: string; local?: string }
export interface Sintoma { id: string; tipo: string; intensidade: number; data: string; classificacao_triagem: ClassificacaoTriagem; observacao?: string }
export interface Refeicao { id: string; descricao: string; data: string; proteinaGramas?: number; calorias?: number }
export interface Medida { id: string; data: string; peso?: number; cintura?: number; quadril?: number; braco?: number; coxa?: number; fotoPrivada?: boolean }
export interface Profissional { id: string; nome: string; registro: string; registroVerificado: boolean; especialidade: string; cidade: string; preco: number; modalidade: ('presencial' | 'teleconsulta')[]; avaliacao: number; horarios: string[] }
export interface Vinculo { id: string; pacienteId: string; profissionalId: string; escopo: EscopoHistorico[]; validade: string; status: 'ativo' | 'revogado' | 'expirado' }
export interface ConversaIA { id: string; usuarioId: string; criadaEm: string; mensagens: string[] }
export interface LogIA { id: string; data: string; usuarioAnonimizado: string; pergunta: string; severidade: ClassificacaoTriagem; fontes: string[]; regraAcionada: string; resposta: string }
