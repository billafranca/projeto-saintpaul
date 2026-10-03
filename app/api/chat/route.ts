import { NextResponse } from 'next/server'
import { hasUrgentSymptoms, urgentMessage } from '@/lib/triage'
export async function POST(request:Request){const {message}=await request.json(); if(hasUrgentSymptoms(message||'')) return NextResponse.json({severidade:'ALERTA',texto:urgentMessage,triagem:true}); return NextResponse.json({severidade:'Esperado / Leve',texto:'Faça pequenas refeições, evite gorduras e tome água em goles. Se piorar, converse com seu médico.'})}
