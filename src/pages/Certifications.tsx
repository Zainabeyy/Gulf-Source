export default function Certifications() {
  const certificates = [
    "certificate-1",
    "certificate-2",
    "certificate-3",
    "certificate-4",
    "certificate-5",
  ];
  return (
    <div className="pt-28 sm:pt-40">
      <section className="text-center">
        <h1 className="gradient mx-auto">Certifications</h1>
        <div className="w-fit mx-auto">
          <div className="gradient-line"></div>
          <p className="max-w-[66ch] leading-[1.75]">
            Gulf Source Industrial Services is committed to delivering the
            highest quality products and services. We adhere to rigorous
            industry standards and have obtained various certifications to
            demonstrate our commitment to excellence.
          </p>
        </div>
      </section>
      <section className="columns-1 sm:columns-2 lg:columns-3 my-14 gap-14">
        {certificates.map((item, index) => (
          <div className="bg-gradient-to-r from-MarianBlue to-SaudiFlagGreen p-3 w-fit h-fit mb-14" key={index}>
            <div className="bg-white p-3">
              <img src={`/certificates/${item}.webp`} alt={item} loading="lazy"/>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
