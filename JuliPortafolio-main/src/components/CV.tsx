import cvImage from '../assets/cvjuli.png';

const CV = () => {
  return (
    <section id="cv" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mi CV
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descarga mi currículum vitae para conocer más sobre mi experiencia profesional, 
            habilidades y formación académica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Currículum Vitae
              </h3>
              <p className="text-muted-foreground">
                Haz clic en la imagen para descargar
              </p>
            </div>

            <div className="flex justify-center">
              <a 
                href={cvImage} 
                download="CV_Juliana_Selles.pdf"
                className="group cursor-pointer transition-transform duration-300 hover:scale-105"
                title="Descargar CV"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={cvImage}
                    alt="CV de Juliana Selles"
                    className="w-full h-auto max-w-2xl object-contain"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/90 text-white px-6 py-3 rounded-full font-medium">
                      Descargar CV
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Formato: PNG • Tamaño: Optimizado para descarga
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
