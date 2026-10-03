const redFlags=[/dor abdominal (forte|intensa|persistente)/i,/vômitos? ininterrupt/i,/não consigo beber|impossibilidade de beber/i,/sangue/i,/desmaio/i,/falta de ar/i,/olhos? amarel/i,/dor forte no (peito|costas)/i]
export function hasUrgentSymptoms(text:string){return redFlags.some(pattern=>pattern.test(text))}
export const urgentMessage='ALERTA: procure um pronto-socorro agora ou ligue 192 (SAMU). Não aplique a próxima dose antes de ser avaliada.'
