import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function HelloPageProtected() {
  const session = await getServerSession();

  if (!session || !session?.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <Image
        src={session?.user?.image!}
        alt={session?.user?.name!}
        width={100}
        height={100}
      />
      <h4>Name: {session?.user?.name}</h4>
    </div>
  );
}
