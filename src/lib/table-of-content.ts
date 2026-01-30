/**
 * Get the indentation padding for a heading based on its level.
 * H2 = no indent, H3 = 12px, H4 = 24px, H5 = 36px, H6 = 48px
 */
function getIndentClass(level: number): string {
  const indentMap: Record<number, string> = {
    2: "",
    3: "pl-3",
    4: "pl-6",
    5: "pl-9",
    6: "pl-12",
  };
  return indentMap[level] || "";
}

/**
 * Get the active state styles (border thickness + text) based on heading level.
 * H2 = thick border (3px), H3 = medium border (2px), H4+ = thin border (1px)
 */
function getActiveStyles(level: number): string {
  const baseActive = "text-primary font-medium";

  if (level === 2) {
    // H2: Thick border, no additional left padding since it's a parent
    return `${baseActive} border-l-[3px] border-primary pl-0 -ml-[3px]`;
  } else if (level === 3) {
    // H3: Medium border with left indicator
    return `${baseActive} border-l-2 border-primary pl-2 -ml-[2px]`;
  } else {
    // H4, H5, H6: Thin border with bullet-style indicator
    return `${baseActive} border-l border-primary pl-2 -ml-px`;
  }
}

/**
 * Get the inactive state styles based on heading level.
 * Parent headings (H2) are slightly bolder, children fade progressively.
 */
function getInactiveStyles(level: number): string {
  const baseInactive =
    "hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200";

  if (level === 2) {
    // H2: Slightly bolder text for parent items
    return `text-gray-700 dark:text-gray-300 font-medium ${baseInactive}`;
  } else if (level === 3) {
    // H3: Normal weight
    return `text-gray-600 dark:text-gray-400 ${baseInactive}`;
  } else {
    // H4+: Slightly lighter for deep nesting
    return `text-gray-500 dark:text-gray-500 text-[13px] ${baseInactive}`;
  }
}

export { getIndentClass, getActiveStyles, getInactiveStyles };
