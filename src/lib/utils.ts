export function kelvinToUnits(kelvin: number, units: "metric" | "imperial") {
  let temp = kelvin;
  if (units === "metric") {
    temp = kelvin - 273.15;
  } else if (units === "imperial") {
    temp = (kelvin - 273.15) * 1.8 + 32;
  }
  return temp.toFixed(1) + "°";
}
