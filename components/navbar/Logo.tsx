import Link from "next/link";
import { Button } from "../ui/button";
import { VscCode } from "react-icons/vsc";

function Logo() {
  return (
    <Button
      size="icon"
      nativeButton={false}
      render={<Link href="/" />}
      className="bg-black text-white hover:bg-black/90"
    >
      <VscCode className="w-6 h-6 " />
    </Button>
  );
}

export default Logo;