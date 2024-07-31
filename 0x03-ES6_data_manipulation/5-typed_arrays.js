/**
 * Creates a buffer array with a given position set to a given value.
 * @param {Number} length - Length of the buffer.
 * @param {Number} position - Position to modify.
 * @param {Number} value - Value to be stored in the position.
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
