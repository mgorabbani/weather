import { kelvinToUnits } from "../lib/utils";

describe("kelvinToUnits", () => {
  it("should correctly convert to Celsius (metric)", () => {
    expect(kelvinToUnits(273.15, "metric")).toBe("0.0°");
    expect(kelvinToUnits(300, "metric")).toBe("26.9°");
    expect(kelvinToUnits(0, "metric")).toBe("-273.1°");
  });

  it("should correctly convert to Fahrenheit (imperial)", () => {
    expect(kelvinToUnits(273.15, "imperial")).toBe("32.0°");
    expect(kelvinToUnits(300, "imperial")).toBe("80.3°");
    expect(kelvinToUnits(0, "imperial")).toBe("-459.7°");
  });

  it("should return Kelvin value if no unit is provided", () => {
    //@ts-ignore - this is a test
    expect(kelvinToUnits(273.15, "unknown")).toBe("273.1°");
  });
});
