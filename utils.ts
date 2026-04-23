export const PRESETS = [
  'today',
  'last7Days',
] as const;

export type DatePreset = (typeof PRESETS)[number];
