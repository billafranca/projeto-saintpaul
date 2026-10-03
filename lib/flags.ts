export const flags = {
  mvp: true,
  painelClinico: true,
  marketplace: true,
  expansao: false,
  comunidadeModerada: false,
} as const

export const faseLabel = (enabled: boolean) => enabled ? undefined : 'Em breve'
// Validar com equipe clínica, bula vigente e consultoria jurídica/regulatória (Anvisa, CFM, LGPD).
