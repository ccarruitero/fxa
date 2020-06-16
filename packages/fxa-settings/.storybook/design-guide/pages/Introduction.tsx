import React from 'react';
import Page from '../Page';
import LinkExternal from 'fxa-react/components/LinkExternal';
import Copiable from '../Copiable';

const Introduction = () => (
  <Page title="Introduction🎨">
    <div className="max-w-4xl">
      <p className="mb-4">
        The Firefox Accounts design guide is designed to be a central place for
        engineers to reference convenience classes provided by our Tailwind
        configuration in favor of referencing the config file itself and what it
        outputs. Additionally, it offers the FxA UX and Visual Design team a
        place to check various styles we're using against their designs.
      </p>
      <p className="mb-4">
        TO DO: explain why this is useful, and/or explain the mental math
        involved in "spacing" on the "spacing" page.
      </p>
      <p className="mb-4">
        See the{' '}
        <LinkExternal
          href="https://github.com/mozilla/fxa/tree/master/packages/fxa-settings"
          className="text-blue-500 underline"
        >
          FxA Settings README
        </LinkExternal>{' '}
        for useful information on Tailwind and styling components, how to use
        shared components, how to handle SVGs, and more.
      </p>
      <div className="shadow-md border border-black border-opacity-25 rounded max-w-xl bg-white mb-4">
        <div className="p-3 bg-grey-50 text-sm font-bold rounded-t">
          <img src="copy-icon.svg" className="inline-block w-6 h-6 mr-1" />
          Pro tip: Copy code samples
        </div>
        <div className="p-3">
          Hover over{' '}
          <Copiable value="max-w-2xl">
            <code className="bg-grey-100 text-sm px-1 rounded-sm">
              monospace text
            </code>
          </Copiable>{' '}
          or color swatches to quickly copy Tailwind classes and other useful
          examples to your clipboard.
        </div>
      </div>
    </div>
  </Page>
);

export default Introduction;
