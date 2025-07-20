const SolidWorksLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="48"
    height="48"
    {...props}
  >
    <path fill="#AF1F24" d="M0 0h256v256H0z" />
    <path
      fill="#FFF"
      d="M178.5 41.3H77.6c-4.3 0-8 3.5-8 7.9v158c0 4.3 3.6 7.9 8 7.9h100.9c4.3 0 8-3.5 8-7.9V49.2c0-4.4-3.6-7.9-8-7.9zm-46.7 122.9c-16.7 0-30-11.7-30-28.1 0-16.9 13.7-28.5 30-28.5 10.9 0 19.3 4.2 24.3 11.1l-10.9 7.1c-2.8-4.1-7-6.4-13.4-6.4-9.3 0-15.6 6.5-15.6 16.7 0 10.1 6.3 16.7 15.6 16.7 6.4 0 10.7-2.3 13.4-6.4l10.9 7.1c-5 6.8-13.4 11-24.3 11z"
    />
  </svg>
);

const DriveWorksLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 140"
    width="48"
    height="48"
    {...props}
  >
    <path
      fill="#F26633"
      d="M208.7 13.3H13.3C6 13.3 0 19.2 0 26.6V114c0 7.4 6 13.3 13.3 13.3h195.4c7.4 0 13.3-6 13.3-13.3V26.6c0-7.4-5.9-13.3-13.3-13.3zM85.4 99.4H65.8V41.3H85c9.2 0 15.6 1.8 19.2 5.5 3.6 3.7 5.5 8.8 5.5 15.3 0 6.5-1.8 11.6-5.4 15.4-3.5 3.8-9.9 5.7-19.1 5.9v15.9h.2zM85.4 71.9c5.2-.1 8.8-1.5 10.8-4.2s3-6.5 3-11.2c0-4.8-1-8.5-3-11.1s-5.6-4-10.8-4H81.1v29.9l4.3.6zM186.1 99.4h-16.2L150.3 41.3h16.2l11.1 40.2 10.7-40.2h16.2L186.1 99.4z"
    />
  </svg>
);

const PtcCreoLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 30"
    width="48"
    height="48"
    {...props}
    className="text-primary"
  >
    <text
      x="50"
      y="15"
      fontFamily="Arial, sans-serif"
      fontSize="12"
      fill="currentColor"
      textAnchor="middle"
      dominantBaseline="middle"
      fontWeight="bold"
    >
      Creo
    </text>
  </svg>
);

const AutodeskInventorLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="48"
    height="48"
    {...props}
  >
    <path fill="#0696D7" d="M0 0h256v256H0z" />
    <path
      fill="#FFF"
      d="M179.9 184.1h-23.3V72.4h23.3v111.7zM77.6 184.1H54.3V72.4h23.3v111.7zm49-140.2h-23.3v23.3h23.3V43.9z"
    />
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
              <item.logo className="h-16 w-16" />
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
