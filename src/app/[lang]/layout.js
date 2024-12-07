import Navbar from "@/components/navbar";

export default function LangLayout({ children, params: { lang }, modal }) {
  return (
    <>
      {modal}
      <Navbar lang={lang} />
      {children}
    </>
  );
}
