import { IMdImage, IMdImageWithLink } from "./markdown.d";

export function mdLink(altText: string, linkTarget: string) {
  return `[${altText}](${linkTarget})`;
}

export function mdImage({ altText, imageTarget, hoverTitle }: IMdImage) {
  if (hoverTitle) {
    imageTarget = `${imageTarget} "${hoverTitle}"`;
  }
  return `![${altText}](${imageTarget})`;
}

// TODO: Add pre-label as social badges have.
/**
 * Create a markdown image tag with external link.
 *
 * This performs no encoding - the inputs should be encoded already to be a URL without spaces and
 * to be a valid URL for shields.io API.
 */
export function mdImageWithLink({
  altText,
  imageTarget,
  linkTarget,
  hoverTitle,
}: IMdImageWithLink) {
  const image = mdImage({ altText, imageTarget, hoverTitle });

  if (linkTarget) {
    return mdLink(image, linkTarget);
  }
  return image;
}