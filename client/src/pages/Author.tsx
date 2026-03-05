import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import coolhunterCover from "@/img/portadas-libros/El-libro-blanco-del-coolhunter.webp";
import designThinkingCover from "@/img/portadas-libros/Design-thinking-i1n11112532.jpg";

export default function Author() {
  const books = [
    {
      title: "El libro blanco del Coolhunter",
      description: "Manual práctico de referencia sobre la Profesión del Coolhunter o Analista de Tendencias: explica qué es y por qué crece su demanda, define el rol del coolhunter (funciones, perfil y deontología) y muestra cómo formarse, dónde buscar señales, cómo apoyarse en tecnología y herramientas digitales, y cómo trabajar con metodología para identificar, analizar y aprovechar tendencias con impacto en negocio.",
      link: "https://www.bubok.es/libros/208118/el-libro-blanco-del-coolhunter",
      cover: coolhunterCover
    },
    {
      title: "Design Thinking. Lidera el presente. Crea el futuro",
      description: "Un libro práctico para comprender y aplicar el Pensamiento de Diseño como forma de resolver problemas e impulsar la innovación en productos, servicios, procesos y estrategia. Explica qué es el Design Thinking y cómo piensan los “design thinkers”, diferencia diseño vs. pensamiento de diseño, presenta metodologías y herramientas para ponerlo en práctica (de la observación y la empatía al prototipado y la validación) y aterriza su aplicación en la empresa.",
      link: "https://www.esic.edu/editorial/design-thinking",
      cover: designThinkingCover
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h1 className="font-serif text-4xl md:text-6xl mb-8 text-primary">
            Escribo libros sobre lo que voy aprendiendo en la vida.
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <div className="space-y-6 text-lg text-muted-foreground text-left leading-relaxed">
            <p>
              En esta página encontrarás mis <strong>libros publicados</strong> y, a medida que vaya lanzando nuevos títulos, también aparecerán aquí para que puedas conocerlos y comprarlos directamente.
            </p>
            <p>
              Cada libro nace de mi camino como emprendedor, inversor, docente, investigador y consejero: experiencias reales, decisiones acertadas y errores útiles, proyectos en primera línea y estudio riguroso. Mi intención es destilar todo ese recorrido en conocimiento práctico —ideas, metodologías, y herramientas— para que otras personas puedan avanzar más rápido, tomar mejores decisiones y aplicar ese know-how a su propio negocio, carrera o inversión.
            </p>
            <p>
              Aunque el <strong>coolhunting</strong>, las <strong>tendencias</strong> y la <strong>innovación</strong> son un eje central de mi trabajo, esta biblioteca irá creciendo con libros sobre otros ámbitos en los que también estoy activamente involucrado y que considero relevantes para profesionales y directivos: <strong>estrategia empresarial</strong>, <strong>inversión</strong> (incluida la inversión inmobiliaria), <strong>inversión en empresas</strong>, crecimiento, toma de decisiones y creación de valor.
            </p>
            <p className="text-sm italic pt-4 border-t border-border">
              Debajo de cada título encontrarás una breve descripción y un botón para acceder a la página oficial de compra. Si quieres estar al día de nuevos lanzamientos y próximos proyectos editoriales, puedes seguirme en mis redes o a través del blog desde esta web.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
          {books.map((book, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="flex flex-col"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-8 relative group">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary leading-tight">
                {book.title}
              </h2>
              
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                {book.description}
              </p>
              
              <a 
                href={book.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all group w-fit"
              >
                Comprar libro
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
