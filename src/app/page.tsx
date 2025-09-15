import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className="min-h-dvh w-full flex items-start justify-center p-4 py-6 bg-neutral-50">
      <ProfileCard
        name="Sahithi Karibandi"
        title="Specializing in bridal and event makeup with a passion for enhancing natural beauty. Creating stunning looks for your most special moments."
        services={[
          "Bridal Makeup",
          "Pre wedding Shoot",
          "Wedding Guest",
          "Event Styling",
          "Photoshoot Ready",
          "Traditional Look",
        ]}
        phone="+91 98765 43210"
        location="Hyderabad, Telangana"
        whatsapp="919876543210"
        instagram="sahithi_makeup"
        pricingNote="Bridal packages starting from ₹10,000 • Free consultation"
        images={[
          { src: "/cropped-A11-min.jpg", alt: "Bridal makeup look 1", caption: "Traditional look" },
          { src: "/cropped-A3-min.jpg", alt: "Bridal makeup look 3", caption: "Wedding look" },
          { src: "/cropped-A5-min.jpg", alt: "Bridal makeup look 5", caption: "Hair styling" },
          { src: "/cropped-b2 (1)-min.jpg", alt: "Bridal makeup look 6", caption: "Bridal look" },
          { src: "/cropped-b5-min.jpg", alt: "Bridal makeup look 7", caption: "Hair styling" },
          { src: "/cropped-b6-min.jpg", alt: "Bridal makeup look 8", caption: "Elegant glam" },
          { src: "/cropped-b7-min.jpg", alt: "Bridal makeup look 9", caption: "wedding saree look" },
          { src: "/cropped-b8-min.jpg", alt: "Bridal makeup look 10", caption: "wedding look" },
          { src: "/cropped-b9-min.jpg", alt: "Bridal makeup look 11", caption: "sangeet look" },
        ]}
      />
    </main>
  );
}
