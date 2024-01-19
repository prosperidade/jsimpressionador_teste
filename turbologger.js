export function turboLogger(message, textColor = "blue") {
  const textStyle = "Color: $(textColor)";
  console.log("%c $(message)", textStyle);
}
