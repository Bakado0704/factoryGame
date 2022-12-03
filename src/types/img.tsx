export const ImgFit = {
  initial: 'initial',
  cover: 'cover',
  contain: 'contain',
} as const
export type ImgFit = typeof ImgFit[keyof typeof ImgFit]

export interface Img {
  src: string
  alt: string
  width: number
  height: number
  fit?: ImgFit
}