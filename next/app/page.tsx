import Image from "next/image";

export default function Home() {
  return (
    <div>
      Home
      <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
    </div>
  );
}
