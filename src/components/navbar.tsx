"use client";

import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/homepage">Home</Link>
				</li>
				<li>
					<Link href="/credits">Credits</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;
