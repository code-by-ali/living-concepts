// components/home/ProcessSection.js

export default function ProcessSection() {
  const processes = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'This stage involves understanding your goals, preferences, and budget to create a solid foundation for the project.',
    },
    {
      number: '02',
      title: 'Concept Design',
      description: 'We craft design concepts that reflect your vision, focusing on innovative solutions and visualizing the final outcome.',
    },
    {
      number: '03',
      title: 'Design Development',
      description: 'This stage includes finalizing the design, selecting materials, and creating construction documents.',
    },
    {
      number: '04',
      title: 'Construction Management',
      description: 'We oversee the construction process to ensure that the project is built according to the approved design.',
    },
    {
      number: '05',
      title: 'Project Handover',
      description: 'We finalize with a thorough review to ensure quality and satisfaction, then hand over the completed project for you to enjoy.',
    },
  ];

  return (
    <section className="bg-primary text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-white">
            <span className="text-xl font-medium text-white">C</span>
          </div>
          
          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-white uppercase tracking-wider">
            PROCESS
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Process Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {/* First Column - Title as Process Item */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-normal leading-tight">
              Our Working<br />Process
            </h2>
          </div>

          {/* Remaining 5 Process Items */}
          {processes.map((process) => (
            <div key={process.number} className="space-y-4">
              {/* Number */}
              <div className="text-lg md:text-xl font-medium text-white">
                #{process.number}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium text-white">
                {process.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base font-normal text-white/60 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}