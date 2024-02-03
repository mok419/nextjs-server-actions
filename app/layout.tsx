import "./global.css";

export const metadata = {
  title: "Next.js Forms Example",
  description: "Example application with forms and Postgres.",
};

export default function RootLayout( props : { children : React.ReactNode, components : React.ReactNode})
   {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
