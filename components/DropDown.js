import Link from "next/link";

function DropDown({ href, children, ...rest }) {
  return (
    <Link href={href} {...rest} className={`block p-2 hover:bg-gray-100 ${rest.className || ''}`}>
      {children}
    </Link>
  );
}

export default DropDown;
