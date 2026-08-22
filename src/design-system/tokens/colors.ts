export const colors = {
  coral: '#F95C4B',
  black: '#000000',
  stone: '#E4DED2',
  paper: '#F6F4F1',
  white: '#FFFFFF',
} as const;

export type ColorToken = keyof typeof colors;
