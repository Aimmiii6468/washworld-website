/**
 * Drop focus from a button that was clicked with a mouse.
 *
 * Buttons keep focus after a click, and both the video tile and the reviews
 * carousel reveal their controls on `focus-within`. Without this, clicking
 * pause once pinned the controls open for good: the cursor moved away, nothing
 * was hovered, and the arrows and the stop button still sat there.
 *
 * `:focus-visible` is the browser's own answer to "was this keyboard or
 * pointer". Keyboard users match it and keep focus, which is what they need to
 * carry on tabbing. Pointer users do not match it, so focus is dropped and the
 * controls fade out with the cursor.
 */
export function blurIfPointer(element: HTMLElement) {
  if (!element.matches(":focus-visible")) element.blur();
}
