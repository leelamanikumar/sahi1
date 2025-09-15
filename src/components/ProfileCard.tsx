"use client";

import Carousel from "@/components/Carousel";

type Props = {
  name: string;
  title?: string;
  services?: string[];
  location?: string;
  phone?: string; // displayable phone, e.g., "+91 98765 43210"
  whatsapp?: string; // full international format without spaces, e.g., 919876543210
  instagram?: string; // handle like "sahithi_makeup" or full url
  pricingNote?: string;
  images: { src: string; alt?: string; caption?: string }[];
};

export default function ProfileCard({ name, title, services, location, phone, whatsapp, instagram, pricingNote, images }: Props) {
  const whatsappHref = whatsapp ? `https://wa.me/${whatsapp}` : undefined;
  const instagramHref = instagram
    ? (instagram.startsWith("http") ? instagram : `https://instagram.com/${instagram}`)
    : undefined;
  const telHref = phone
    ? `tel:${(phone || "").replace(/[^\d+]/g, "")}`
    : undefined;

  return (
    <section className="w-full max-w-sm mx-auto p-4">
      <div className="rounded-3xl bg-white text-black shadow-lg ring-1 ring-black/5 overflow-hidden">
        <Carousel images={images} aspectRatio="4/5" />

        <div className="p-4">
          <h1 className="text-xl font-semibold">{name}</h1>
          {title ? <p className="text-sm text-black/60 mt-0.5">{title}</p> : null}

          {services && services.length > 0 ? (
            <div className="mt-3 -mx-1 overflow-x-auto">
              <div className="flex gap-2 px-1">
                {services.map((service, idx) => (
                  <span
                    key={`${service}-${idx}`}
                    className="shrink-0 rounded-full bg-black/5 text-black/80 text-xs px-3 py-1 border border-black/10"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {phone ? (
            <p className="text-sm text-black/70 mt-2 inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black/60"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372a3 3 0 0 1 2.822 1.972l.83 2.49a3 3 0 0 1-.676 3.09l-.97.97a.75.75 0 0 0-.156.82 8.75 8.75 0 0 0 4.665 4.665.75.75 0 0 0 .82-.156l.97-.97a3 3 0 0 1 3.09-.676l2.49.83A3 3 0 0 1 22.5 18.128V19.5a3 3 0 0 1-3 3h-1.125C8.56 22.5 1.5 15.44 1.5 6.625V4.5Z" clipRule="evenodd"/></svg>
              {telHref ? (
                <a href={telHref} className="hover:underline">
                  {phone}
                </a>
              ) : (
                phone
              )}
            </p>
          ) : null}
          {location ? (
            <p className="text-sm text-black/60 mt-1 inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black/60"><path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0c2.262 2.26 6.22 6.442 6.22 9.78A6.75 6.75 0 0 1 12 19 6.75 6.75 0 0 1 6.25 12.25c0-3.338 3.96-7.52 6.22-9.78ZM12 10a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 0 0 12 10Z" clipRule="evenodd"/></svg>
              {location}
            </p>
          ) : null}

          {pricingNote ? (
            <p className="mt-4 text-sm font-medium text-black/80">{pricingNote}</p>
          ) : null}

          <div className="mt-3 grid grid-cols-2 gap-3">
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 text-white h-11 text-sm font-medium active:scale-[.98]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.47 0 .11 5.36.11 11.96c0 2.1.55 4.16 1.59 5.98L0 24l6.2-1.63a11.86 11.86 0 0 0 5.85 1.52h.01c6.59 0 11.95-5.36 11.95-11.95a11.9 11.9 0 0 0-3.49-8.46ZM12.06 21.6h-.01c-1.87 0-3.7-.5-5.3-1.44l-.38-.23-3.68.97.98-3.59-.25-.37a9.58 9.58 0 0 1-1.49-5.08c0-5.29 4.31-9.6 9.6-9.6 2.56 0 4.97 1 6.78 2.82a9.53 9.53 0 0 1 2.82 6.78c0 5.29-4.31 9.6-9.59 9.6Zm5.26-7.15c-.29-.14-1.73-.85-1.99-.95-.27-.1-.46-.14-.65.14-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.14-1.21-.45-2.3-1.42-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.12-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.88-2.16-.23-.55-.47-.48-.65-.48-.16-.01-.36-.01-.55-.01-.19 0-.5.07-.77.36-.27.29-1.01.99-1.01 2.42 0 1.43 1.03 2.8 1.17 2.99.14.19 2.03 3.09 4.92 4.33.69.29 1.22.46 1.64.59.69.22 1.32.19 1.82.12.56-.08 1.73-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.12-.26-.19-.55-.33Z"/></svg>
                WhatsApp
              </a>
            ) : null}
            {instagramHref ? (
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-rose-500 to-orange-400 text-white h-11 text-sm font-medium active:scale-[.98]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm11 1.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/></svg>
                Instagram
              </a>
            ) : null}
          </div>

          <div className="mt-3 text-xs text-black/60">
            <p>Tap WhatsApp to check availability and book appointments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


