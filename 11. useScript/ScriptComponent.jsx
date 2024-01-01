import React from "react";
import useScript from "./useScript";

export default function ScriptComponent() {
  const { loading, error } = useScript(
    "https://code.jquery.com/jquery-3.7.1.slim.js"
  );
  const dots = [" ", ".", "..", "..."];
  let count = -1;
  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;
  return <div>{window.$(window).width()}</div>;
}
