/**
 * 🏷️ typing module
 * @version 1.0.4
 * @date 2026-09-19
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */

// helper
export type StringLike<T extends string> = string & { __brand?: T }; // avoid collision not working with build-in prototypes of a string (e.g. replace())

// uri
export type TLD = `${string}`;
export type SLD = `${string}`;
export type SUBDOMAIN = `${string}`;
export type HOSTNAME = StringLike<`${SUBDOMAIN | ''}${SLD}.${TLD}`>;
export type DOMAIN = `${SLD}.${TLD}`;
export type FQDN = `http${'s' | ''}://${DOMAIN}`; // fully qualified domain name
export type URI = StringLike<`${FQDN | DOMAIN}`>;

// more
export type NUM = StringLike<`${number}`>;

// value or null or undefined
export type $string = string | null | undefined;
export type $URI = URI | null | undefined;

// specials
export type KEY_VALUE = {
    key: string;
    value: string;
};
