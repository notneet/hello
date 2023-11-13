import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <Image src={`/favicon.ico`} alt="favicon" width={100} height={100} />
      </div>
      <div className="pt-5">
        <Link href={`/not-found`} className="font-mono underline text-sm">
          Navigate to not-found page
        </Link>
      </div>
    </main>
  );
}
