import Link from "next/link";
import React from "react";

export default function () {
  return (
    <div>
      <h1>Here in the main page</h1>
      <p>
        You can navigate to <Link href="/routingPage">Next Page</Link>
      </p>
    </div>
  );
}
