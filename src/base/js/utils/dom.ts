/**
 * Run function when dom is ready
 *
 * @param callback function to run when dom is ready
 */
export function ready(callback: (this: Document) => void): void {
  if (document.readyState !== 'loading') {
    callback.call(document)
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}
