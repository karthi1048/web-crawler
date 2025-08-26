const { normalizeURL } = require('../js/crawl.js');
const { test, expect } = require('@jest/globals');

// Example URL = https://blog.boot.dev/path

test('normalizeURL Strip protocol', () => {
    const input = "https://blog.boot.dev/path";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    // Expecting the actual output of normalizeURL = expected output that i have specified
    expect(actual).toEqual(expected);
});

test('normalizeURL http', () => {
    const input = "http://BLOG.boot.dev/path";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test('normalizeURL Strip trailing slash', () => {
    const input = "https://blog.boot.dev/path/";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test('normalizeURL capitals', () => {
    const input = "https://BLOG.boot.dev/path";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});