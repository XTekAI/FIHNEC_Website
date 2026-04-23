export interface Capitulo {
  id: string
  nombre: string
  ciudad: string
  region: "NJ" | "PHL"
  direccion: string
  lugar: string
  dia: string
  hora: string
  lider: string
  contacto: string
  imagen?: string
}

export interface Evento {
  id: string
  titulo: string
  fecha: string
  hora: string
  lugar: string
  ciudad: string
  region: "NJ" | "PHL" | "AMBOS"
  descripcion: string
  imagen?: string
}

export interface Testimonio {
  id: string
  nombre: string
  ciudad: string
  region: "NJ" | "PHL"
  texto: string
  avatar?: string
}
