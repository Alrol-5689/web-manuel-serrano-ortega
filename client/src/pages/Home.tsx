import { motion } from "framer-motion";
import portraitImage from "@/img/manuel/manuel.png";
import ikeaLogo from "@/img/logos/ikea-logo-black-transparent.png";
import cocaColaLogo from "@/img/logos/Logo-Coca-Cola.png";
import nestleLogo from "@/img/logos/Nestle_textlogo_blue.svg_.png";
import danoneLogo from "@/img/logos/Danone_2004_logo.png";
import kelloggsLogo from "@/img/logos/Kelloggs-Logo.wine_-scaled.png";
import leroyMerlinLogo from "@/img/logos/Leroy_Merlin_-_logo_France_1995-.svg_.png";
import claLogo from "@/img/logos/Central_Lechera_Asturiana_vectorial.svg_.png";
import { videos } from "@/data/videos";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play } from "lucide-react";

export default function Home() {
  const logos = [
    { src: ikeaLogo, alt: "IKEA" },
    { src: cocaColaLogo, alt: "Coca-Cola" },
    { src: nestleLogo, alt: "Nestlé" },
    { src: danoneLogo, alt: "Danone" },
    { src: kelloggsLogo, alt: "Kellogg's" },
    { src: leroyMerlinLogo, alt: "Leroy Merlin" },
    { src: claLogo, alt: "Central Lechera Asturiana" },
  ];

  const speakerVideos = videos.slice(0, 6);
  const mediaVideos = videos.slice(6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-primary">
                Manuel Serrano Ortega
              </h1>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <h2 className="text-xl md:text-2xl font-medium text-primary mb-8 leading-snug">
                Trend Advisor para CEOs, equipos directivos y Consejos de Administración.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Identifico señales de cambio (tendencias emergentes) en mercados, consumidores y tecnología; las analizo con metodología de <strong>Coolhunting</strong> y con herramientas de <strong>Trend Intelligence</strong>; y las traduzco en implicaciones claras para tu negocio —riesgos y amenazas, oportunidades y escenarios futuros— para que puedas tomar decisiones estratégicas con la anticipación necesaria y <strong>mantenerte siempre un paso por delante de tu competencia</strong>.
              </p>
              <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all hover:scale-105">
                Contactar
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-secondary rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <img 
                src={portraitImage} 
                alt="Manuel Serrano Ortega" 
                className="w-full h-auto object-cover rounded-[3rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-12">
            Han confiado en mi trabajo
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, i) => (
              <img 
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-14 object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conferenciante Section */}
      <section id="speaker" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Conferencias y ponencias</h2>
            <p className="text-xl text-muted-foreground">
              Ideas claras, ejemplos reales y visión de futuro aplicada a negocio.
            </p>
            <a 
              href="https://www.youtube.com/playlist?list=PLgK5b5ssLGftsU_q2W0ka5pnUntpCNmTM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 font-medium text-primary hover:text-primary/70 underline underline-offset-4"
            >
              Ver playlist completa en YouTube
            </a>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {speakerVideos.map((video, index) => {
                const videoTitle = `Vídeo ${index + 1}`;

                return (
                  <CarouselItem key={video.url} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <a 
                        href={video.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Card className="border-none shadow-none bg-transparent group cursor-pointer overflow-hidden rounded-2xl">
                          <CardContent className="p-0 relative aspect-video">
                            <img 
                              src={video.thumbnail} 
                              alt={videoTitle} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play className="text-white fill-white ml-1" size={24} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* En Medios Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">En medios</h2>
            <p className="text-xl text-primary-foreground/80">
              Entrevistas y análisis sobre tendencias, innovación y cambio.
            </p>
            <a 
              href="https://www.youtube.com/playlist?list=PLgK5b5ssLGfvStOvpo_kXxMBmiYF9qKdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 font-medium text-white hover:text-white/70 underline underline-offset-4"
            >
              Ver playlist completa en YouTube
            </a>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {mediaVideos.map((video, index) => {
                const videoTitle = `Vídeo ${speakerVideos.length + index + 1}`;

                return (
                  <CarouselItem key={video.url} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <a 
                        href={video.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Card className="border border-white/10 shadow-none bg-white/5 group cursor-pointer overflow-hidden rounded-2xl backdrop-blur-sm">
                          <CardContent className="p-0 relative aspect-video">
                            <img 
                              src={video.thumbnail} 
                              alt={videoTitle} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play className="text-white fill-white ml-1" size={24} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white/10 border-none hover:bg-white/20 text-white" />
              <CarouselNext className="static translate-y-0 bg-white/10 border-none hover:bg-white/20 text-white" />
            </div>
          </Carousel>
        </div>
      </section>

    </div>
  );
}
