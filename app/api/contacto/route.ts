// ============================================
// ARCHIVO: /app/api/contacto/route.ts
// ============================================
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Aquí iría la lógica para enviar el email (ej. Resend, SendGrid) o guardar en BD
    console.log('Mensaje de contacto recibido:', body);
    
    // Simular un retardo de red
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el contacto:', error);
    return NextResponse.json(
      { error: 'Hubo un error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
