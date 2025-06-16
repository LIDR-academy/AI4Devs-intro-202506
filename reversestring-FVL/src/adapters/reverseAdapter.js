//<- adapter between UI and domain
import { reverseString } from '../core/reverseString.js';

export function handleReverse(input) {
  return reverseString(input);
}