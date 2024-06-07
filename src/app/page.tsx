import Link from "next/link";
export default function Home() {
  return (
    <>
      <p>landing page here</p>
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/register">Register</Link>
    </>
  );
}
