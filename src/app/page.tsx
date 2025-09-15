import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className="min-h-dvh w-full flex items-start justify-center p-4 py-6 bg-neutral-50">
      <ProfileCard
        name="Sahithi Karibandi"
        title="Specializing in bridal and event makeup with a passion for enhancing natural beauty. Creating stunning looks for your most special moments."
        location="Hyderabad, Telangana"
        whatsapp="918143879687"
        instagram="glam_by_sahithi"
        pricingNote="Bridal packages starting from ₹10,000 • Free consultation"
        images={[
          { src: "/cropped-A11-min.jpg", alt: "Makeup look 1" },
          { src: "/cropped-A2-min.jpg", alt: "Makeup look 2" },
          { src: "/cropped-A3-min.jpg", alt: "Makeup look 3" },
          { src: "/cropped-A4-min.jpg", alt: "Makeup look 3" },
          { src: "/cropped-A5-min.jpg", alt: "Makeup look 3" },
        ]}
      />
    </main>
  );
}
