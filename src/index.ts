/**
 * 🗂️ main module
 * @version 1.0.4
 * @date 2026-09-19
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */
import type { $string } from './index.d';

// pseudo code to fit eslint adn to test
const testFn = (input: $string): $string => input;
let testVar: $string = null;
testVar = 'Hello, world!';

testFn(testVar);
