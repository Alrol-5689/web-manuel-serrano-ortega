import { Mail, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">¿Hablamos?</h2>
            <p className="text-primary-foreground/80 mb-6 text-lg leading-relaxed max-w-lg">
              Para propuestas de <strong>Consejo/Advisory</strong>, ponencias y conferencias, colaboraciones en <strong>medios</strong> o posibles <strong>alianzas</strong>, puedes escribirme directamente y te responderé lo antes posible.
            </p>
            <p className="text-primary-foreground/80 mb-6 text-lg leading-relaxed max-w-lg">
              Si me indicas brevemente el <strong>contexto</strong>, el <strong>sector</strong>, el <strong>objetivo</strong> y el <strong>plazo</strong>, podré orientarte con mayor precisión desde el primer contacto.
            </p>
            
            <div className="flex gap-4 mt-8">
              <a href="https://www.linkedin.com/in/manuelserranoortega/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/user/ManuelSerranoOrtega" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/manuelserranoortega/?hl=es" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.threads.com/@manuelserranoortega" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center font-bold text-sm h-[44px] w-[44px]">
                Th
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 justify-center">
            <a 
              href="mailto:yes@manuelserranoortega.com?subject=Conversación confidencial — Consejo / Advisory"
              className="group bg-white/5 border border-white/10 hover:bg-white/10 p-6 rounded-xl transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Consejo / Advisory (confidencial)</h3>
                <p className="text-primary-foreground/60 text-sm">Acompañamiento estratégico a nivel de dirección.</p>
              </div>
              <Mail className="text-primary-foreground/40 group-hover:text-white transition-colors" />
            </a>
            
            <a 
              href="mailto:yes@manuelserranoortega.com?subject=Invitación como speaker — Evento"
              className="group bg-white/5 border border-white/10 hover:bg-white/10 p-6 rounded-xl transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Speaker / Eventos</h3>
                <p className="text-primary-foreground/60 text-sm">Por favor incluye fecha, ciudad/formato, tipo de audiencia y temática.</p>
              </div>
              <Mail className="text-primary-foreground/40 group-hover:text-white transition-colors" />
            </a>

            <a 
              href="mailto:yes@manuelserranoortega.com?subject=Solicitud medios / entrevista"
              className="group bg-white/5 border border-white/10 hover:bg-white/10 p-6 rounded-xl transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Medios / Prensa</h3>
                <p className="text-primary-foreground/60 text-sm">Análisis y opiniones sobre tendencias e innovación.</p>
              </div>
              <Mail className="text-primary-foreground/40 group-hover:text-white transition-colors" />
            </a>

            <a 
              href="mailto:yes@manuelserranoortega.com?subject=Alianza / colaboración"
              className="group bg-white/5 border border-white/10 hover:bg-white/10 p-6 rounded-xl transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Colaboraciones / Alianzas</h3>
                <p className="text-primary-foreground/60 text-sm">Proyectos conjuntos e iniciativas estratégicas.</p>
              </div>
              <Mail className="text-primary-foreground/40 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Manuel Serrano Ortega. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="https://www.coolhuntingg.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Coolhunting Group</a>
            <span>·</span>
            <a href="https://www.coolhuntinguniversity.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Coolhunting University</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
