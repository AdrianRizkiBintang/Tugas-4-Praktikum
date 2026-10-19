import Image from "next/image";

export default function Logo({ size = 40, priority = false }) {
  return (
    <Image
      src="/logo.png"
      alt="Aoiro Studio logo"
      width={size}
      height={Math.round(size * 0.8)}
      priority={priority}
    />
  );
}
