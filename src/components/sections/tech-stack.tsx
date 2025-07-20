const SolidWorksLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" fill="#003049"/>
      <path d="M24 44V24L44 14V34L24 44Z" fill="#D62828"/>
      <path d="M4 14V34L24 24L4 14Z" fill="#EAE2B7"/>
      <path d="M24 4L4 14L24 24L44 14L24 4Z" fill="#F77F00"/>
    </svg>
  );
  
  const DriveWorksLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="20" fill="#003049"/>
      <path d="M18 18L30 24L18 30V18Z" fill="#D62828"/>
      <path d="M30 18H34V30H30V18Z" fill="#F77F00"/>
    </svg>
  );
  
  const PtcCreoLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 10H38V18H18V26H34V34H10V10Z" fill="#003049"/>
      <path d="M38 10V34H30V18H18V10H38Z" fill="#D62828"/>
    </svg>
  );
  
  const AutodeskInventorLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 4L10 14L24 24L38 14L24 4Z" fill="#003049"/>
      <path d="M10 14V34L24 44V24L10 14Z" fill="#D62828"/>
      <path d="M24 44L38 34V14L24 24V44Z" fill="#F77F00"/>
    </svg>
  );
  
  const tech = [
    { name: "SolidWorks", logo: SolidWorksLogo, description: "3D CAD Software" },
    { name: "DriveWorks", logo: DriveWorksLogo, description: "Design Automation" },
    { name: "PTC Creo", logo: PtcCreoLogo, description: "Parametric CAD" },
    { name: "Autodesk Inventor", logo: AutodeskInventorLogo, description: "3D Mechanical Design" },
  ];
  
  export default function TechStackSection() {
    return (
      <section id="tech-stack" className="bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Powered by Trusted Tools
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              We build on industry-leading platforms to deliver robust and scalable automation solutions.
            </p>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {tech.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-4">
                <item.logo className="text-primary h-16 w-16" />
                <div className="text-center">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  