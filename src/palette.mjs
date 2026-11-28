// The single source of truth for Minty's colors.
// Edit values here, then run `npm run build`.

import { mix } from "./color.mjs";

/** Base palette. Each value is an opaque #RRGGBB color. */
export const base = {
  bg: "#1E1E1E", // editor background, pure grey
  fg: "#C4C7C5", // identifiers, type names, object keys
  fgBright: "#E8EAE9", // active tab and other emphasized UI text

  eucalyptus: "#82CBAD", // pastel eucalyptus: keywords, built-in types, Markdown headings, UI accents
  dusty: "#8DB5A5", // strings: the quieter green
  deep: "#5F8575", // selection, bracket match, find matches, focus

  lavender: "#ADA4D0", // function declarations and calls, HTML tags, CSS selectors
  sand: "#D7B98E", // numbers, constants, booleans, Angular component tags
  mauve: "#C29BB8", // properties, fields, decorators, type parameters
  punct: "#8F9391", // punctuation and operators
  comment: "#7A7E7C", // comments

  error: "#E07A6F", // errors, deletions
  warning: "#D9A85B", // warnings, modifications

  onAccent: "#0F1A15", // text drawn on eucalyptus (buttons, badges)
};

/** Surfaces and UI greys derived from the base palette. */
export function derive(p) {
  return {
    ...p,
    chrome: mix(p.bg, "#000000", 0.18), // sidebar, activity bar, title bar, status bar, inactive tabs
    lineHighlight: mix(p.bg, "#FFFFFF", 0.035),
    widget: mix(p.bg, "#FFFFFF", 0.03), // hover, suggest, find widget, menus
    input: mix(p.bg, "#FFFFFF", 0.05),
    border: mix(p.bg, "#FFFFFF", 0.07),
    guide: mix(p.bg, "#FFFFFF", 0.09), // indent guides, rulers
    lineNumber: mix(p.bg, p.fg, 0.3),
    lineNumberActive: mix(p.bg, p.fg, 0.78),
    dim: mix(p.bg, p.fg, 0.58), // inactive tabs, status bar text, descriptions
  };
}

/** Terminal ANSI colors, built from the same palette. */
export function ansi(p) {
  return {
    black: mix(p.bg, "#FFFFFF", 0.12),
    red: p.error,
    green: p.eucalyptus,
    yellow: p.sand,
    blue: p.lavender,
    magenta: p.mauve,
    cyan: p.dusty,
    white: p.fg,
    brightBlack: p.comment,
    brightRed: mix(p.error, "#FFFFFF", 0.22),
    brightGreen: mix(p.eucalyptus, "#FFFFFF", 0.22),
    brightYellow: mix(p.sand, "#FFFFFF", 0.22),
    brightBlue: mix(p.lavender, "#FFFFFF", 0.22),
    brightMagenta: mix(p.mauve, "#FFFFFF", 0.22),
    brightCyan: mix(p.dusty, "#FFFFFF", 0.22),
    brightWhite: "#F2F3F2",
  };
}

/**
 * Theme variants. Each one maps syntax roles to palette colors:
 *   keyword    language words: const, if, return, def, import
 *   string     string literals
 *   func       function and method declarations
 *   call       function and method calls
 *   type       type names: classes, interfaces, enums, aliases, JSX components
 *   builtin    built-in types written as words: void, boolean, string, number
 *   tag        HTML tags, CSS selectors, Markdown links
 *   component  component tags in HTML templates: any hyphenated tag (app-pony, mat-icon)
 *   value      numbers, booleans, null, escapes, CSS keyword values
 *   decorator  decorators, annotations, type parameters
 *   prop       property access after a dot, class and interface fields
 * Identifiers always use fg; punctuation uses punct; comments use comment.
 */
export const variants = [
  {
    file: "minty-color-theme.json",
    name: "Minty",
    palette: base,
    roles: { keyword: "eucalyptus", string: "dusty", func: "lavender", call: "lavender", type: "fg", builtin: "eucalyptus", tag: "lavender", component: "sand", value: "sand", decorator: "mauve", prop: "mauve" },
  },
];

/** Contrast targets against the editor background (WCAG ratio). */
export const contrastTargets = {
  fg: 4.5,
  eucalyptus: 4.5,
  dusty: 4.5,
  lavender: 4.5,
  sand: 4.5,
  mauve: 4.5,
  error: 4.5,
  warning: 4.5,
  punct: 4.5,
  comment: 3.5,
  deep: 3.0,
};
