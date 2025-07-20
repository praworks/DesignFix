import Image from "next/image";

const tech = [
  { 
    name: "SolidWorks", 
    logo: "https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo-800x500.png",
    description: "3D CAD Software" 
  },
  { 
    name: "DriveWorks", 
    logo: "https://www.driveworks.co.uk/wp-content/uploads/2024/06/YoastSEO-OrganizationLogo.jpg", 
    description: "Design Automation" 
  },
  { 
    name: "PTC Creo", 
    logo: "https://www.ptc.com/-/media/Images/ptc-logos/ptc-creo-logo-positive-rgb.png", 
    description: "Parametric CAD" 
  },
  { 
    name: "Autodesk Inventor", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Autodesk_Inventor_logo.svg/1024px-Autodesk_Inventor_logo.svg.png",
    description: "3D Mechanical Design" 
  },
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
            <div key={item.name} className="flex flex-col items-center gap-4 text-center">
              <div className="relative h-20 w-28">
                 <Image 
                    src={item.logo} 
                    alt={`${item.name} logo`}
                    fill
                    className="object-contain"
                />
              </div>
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
