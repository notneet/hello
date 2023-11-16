"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";
export type Menu = {
  name: string;
  path: string;
};
const menus: Menu[] = [
  { name: "Home", path: "/" },
  { name: "Hello", path: "/hello" },
  { name: "Server Action", path: "/serverAction" },
  { name: "API From Client", path: "/apiFromClient" },
  { name: "API From Server", path: "/apiFromServer" },
];

export default function NavMenu() {
  const segment = usePathname();

  return (
    <div>
      <AuthButton />
      <hr className="my-4" />
      <ul>
        {menus &&
          menus?.map((it) => (
            <Link href={it?.path} key={it?.name}>
              <li
                className={segment === it?.path ? ACTIVE_ROUTE : INACTIVE_ROUTE}
              >
                {it?.name}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
