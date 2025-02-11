interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

export default function ClientFeedback() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      name: "Name Surname",
      position: "Position",
      company: "Company name",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      name: "Name Surname",
      position: "Position",
      company: "Company name",
    },
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Client Feedback
        </h2>
        <p className="mb-16 text-center text-gray-600">
          Hear from our satisfied clients about their experiences.
        </p>

        <div className="flex flex-col justify-between lg:flex-row lg:space-x-10 ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-md">
              <blockquote className="mb-6 italic text-gray-600">
                {testimonial.quote}
              </blockquote>
              <div className="pt-4 border-t">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Webflow section - adjust based on actual needs */}
        <div className="mt-16 text-center">
          <span className="italic text-gray-400"> 98% of our clients are happy with the services </span>
        </div>
      </div>
    </section>
  );
}
