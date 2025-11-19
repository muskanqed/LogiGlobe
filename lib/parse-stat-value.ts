export interface ParsedStatValue {
  numericValue: number;
  suffix: string;
  prefix: string;
}

/**
 * Parses stat values like "40+", "500+", "99%", "20K+" into numeric values and suffixes
 * @param value - The stat value string to parse
 * @returns ParsedStatValue object with numericValue, suffix, and prefix
 */
export function parseStatValue(value: string): ParsedStatValue {
  // Match patterns like: 40+, 500+, 99%, 20K+, $100, etc.
  const match = value.match(/^(\$)?(\d+(?:\.\d+)?)(K|M)?(\%|\+)?$/i);

  if (!match) {
    return { numericValue: 0, suffix: "", prefix: "" };
  }

  const prefix = match[1] || "";
  const numericPart = parseFloat(match[2]);
  const multiplierPart = match[3] || "";
  const additionalSuffix = match[4] || "";

  // Handle K (thousands) and M (millions) as multipliers
  let numericValue = numericPart;
  let suffix = "";

  if (multiplierPart.toUpperCase() === "K") {
    numericValue = numericPart * 1000;
    suffix = "K" + additionalSuffix;
  } else if (multiplierPart.toUpperCase() === "M") {
    numericValue = numericPart * 1000000;
    suffix = "M" + additionalSuffix;
  } else {
    suffix = additionalSuffix;
  }

  return { numericValue, suffix, prefix };
}
