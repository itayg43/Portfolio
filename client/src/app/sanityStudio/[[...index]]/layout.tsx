import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SanityStudioLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default SanityStudioLayout;
