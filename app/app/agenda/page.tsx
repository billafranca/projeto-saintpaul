'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { CalendarDays, Check, ChevronLeft, ShieldCheck } from 'lucide-react'

const horarios = ['Hoje · 18:00', 'Amanhã · 09:30', 'Amanhã · 14:00', 'Qui · 14:00', 'Sex · 10:30']
const escopos = ['Resumo de sintomas', 'Nutrição e hidratação', 'Relatório da Protea', 'Fotos de progresso']

export default function AgendaPage() {
  const [profissional, setProfissional] = useState('helena-duarte')
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('profissional')
    if (value) setProfissional(value)
  }, [])
  const [horario, setHorario] = useState('')
  const [consentimentos, setConsentimentos] = useState<string[]>(['Resumo de sintomas'])
  const [validade, setValidade] = useState('Até a consulta')
  const [confirmado, setConfirmado] = useState(false)

  const nome = useMemo(() => profissional === 'lucas-prado' ? 'Lucas Prado' : 'Dra. Helena Duarte', [profissional])
  const toggle = (item: string) => setConsentimentos((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item])

  if (confirmado) return <main className="app-shell"><div className="mx-auto flex min-h-screen max-w-[620px] flex-col justify-center px-5 py-8"><div className="rounded-[32px] bg-white p-7 text-center shadow-sm"><div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#e1f3ef] text-[#0b6e63]"><Check size={30}/></div><h1 className="mt-5 font-display text-2xl font-extrabold">Consulta reservada</h1><p className="mt-3 text-sm leading-relaxed text-[#64817d]">Sua consulta com {nome} está marcada para <strong>{horario}</strong>. O compartilhamento escolhido vale por {validade.toLowerCase()}.</p><Link href="/app/consulta/demo" className="mt-6 flex min-h-12 items-center justify-center rounded-2xl bg-[#0f9d8a] font-bold text-white">Ir para minha consulta</Link><Link href="/app" className="mt-3 block text-sm font-semibold text-[#0b6e63]">Voltar ao app</Link></div></div></main>

  return <main className="app-shell"><div className="mx-auto min-h-screen max-w-[620px] px-5 py-6"><Link href={`/app/profissional/${profissional}`} className="flex items-center gap-1 text-sm font-semibold text-[#0b6e63]"><ChevronLeft/> Voltar ao perfil</Link><h1 className="mt-8 font-display text-3xl font-extrabold">Agendar consulta</h1><p className="mt-2 text-sm text-[#64817d]">Escolha um horário e defina exatamente o que deseja compartilhar.</p><section className="mt-6 rounded-3xl bg-white p-5 shadow-sm"><div className="flex items-center gap-3"><CalendarDays className="text-[#0f9d8a]"/><div><p className="font-display font-bold">{nome}</p><p className="text-sm text-[#78928e]">Teleconsulta · São Paulo</p></div></div><h2 className="mt-6 font-display font-bold">Horários disponíveis</h2><div className="mt-3 grid gap-2 sm:grid-cols-2">{horarios.map((item) => <button key={item} onClick={() => setHorario(item)} className={`min-h-12 rounded-xl border text-sm font-semibold ${horario === item ? 'border-[#0f9d8a] bg-[#e1f3ef] text-[#0b6e63]' : 'border-[#d9e8e5] text-[#64817d]'}`}>{item}</button>)}</div></section><section className="mt-4 rounded-3xl bg-white p-5 shadow-sm"><div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 text-[#0f9d8a]"/><div><h2 className="font-display font-bold">Compartilhar seu histórico</h2><p className="mt-1 text-xs leading-relaxed text-[#78928e]">Você controla o escopo. É possível revogar o acesso pela tela de Privacidade.</p></div></div><div className="mt-4 grid gap-2">{escopos.map((item) => <label key={item} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-[#e5efed] px-3 text-sm text-[#365b57]"><input type="checkbox" checked={consentimentos.includes(item)} onChange={() => toggle(item)} className="size-4 accent-[#0f9d8a]"/>{item}</label>)}</div><select value={validade} onChange={(event) => setValidade(event.target.value)} className="mt-4 min-h-11 w-full rounded-xl border border-[#d9e8e5] bg-white px-3 text-sm"><option>Até a consulta</option><option>30 dias</option><option>90 dias</option></select></section><button disabled={!horario || consentimentos.length === 0} onClick={() => setConfirmado(true)} className="mt-5 min-h-12 w-full rounded-2xl bg-[#0f9d8a] font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">Confirmar agendamento</button><p className="mt-4 text-center text-[11px] text-[#78928e]">A plataforma não cobra por paciente indicado e não promete resultados.</p></div></main>
}
