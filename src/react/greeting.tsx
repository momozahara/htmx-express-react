import React from "react";
import { renderToString } from "react-dom/server";

function _greeting({
  greet,
  name = "world",
}: {
  greet: string;
  name?: string;
}) {
  return (
    <pre>
      {greet} {name}
    </pre>
  );
}

export default function Greeting(greet: string, name: string | undefined) {
  return renderToString(
    <_greeting
      greet={greet}
      name={name}
    />,
  );
}
