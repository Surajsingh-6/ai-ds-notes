import React from "react";
import Link from "next/link";
function Navbar() {
    return (
        <div className="flex items-center justify-between px-5 border-2 border-black w-full h-12">
            <div><Link href="/">AI NOTES</Link></div>
            <div>
                <ul className="flex gap-4">
                    <li>
                        <Link href="./Assig1">Assignment</Link>
                    </li>
                    <li>
                        <Link href="/notes">Notes</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
