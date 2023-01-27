const postcss = require('postcss')

const plugin = require('./')

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

describe('postcss-viewport-unit-fallback', () => {
  it('add dvh fallback', () => {
    run(
      'a { height: 100dvh; }',
      'a { height: 100vh; height: 100dvh; }'
    )
  })
  it('add lvh fallback', () => {
    run(
      'a { max-height: 10lvh; }',
      'a { max-height: 10vh; max-height: 10lvh; }'
    )
  })
  it('add svh fallback', () => {
    run(
      'a { min-height: 20svh; }',
      'a { min-height: 20vh; min-height: 20svh; }'
    )
  })
  it('add dvw fallback', () => {
    run(
      'a { width: 100dvw; }',
      'a { width: 100vw; width: 100dvw; }'
    )
  })
  it('add lvw fallback', () => {
    run(
      'a { max-width: 10lvw; }',
      'a { max-width: 10vw; max-width: 10lvw; }'
    )
  })
  it('add svw fallback', () => {
    run(
      'a { min-width: 20svw; }',
      'a { min-width: 20vw; min-width: 20svw; }'
    )
  })
});
