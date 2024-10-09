import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

registerBlockType('people-studio/cta-block', {
    title: 'CTA Block',
    icon: 'button',
    category: 'layout',
    attributes: {
        text: {
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: 'Hero Sub Text',
        },
        buttonText: {
            type: 'string',
            default: 'Learn More',
        },
    },
    edit({ attributes, setAttributes }) {
        const { text, buttonText } = attributes;

        return (
            <Fragment>
                <div className="bg-white text-center p-14">
                    <RichText
                        tagName="h2"
                        value={text}
                        onChange={(value) => setAttributes({ text: value })}
                        className="font-inter font-semibold text-xl text-[#1C3D5A] mb-4"
                        placeholder="Add your text here"
                        allowedFormats={['core/bold', 'core/italic', 'core/line']}
                    />
                    <div className="text-center mt-4">
                        <input
                            type="text"
                            value={buttonText}
                            onChange={(e) => setAttributes({ buttonText: e.target.value })}
                            className="text-lg border rounded-lg p-2 text-center"
                            placeholder="Button Text"
                        />
                    </div>
                </div>
            </Fragment>
        );
    },
    save({ attributes }) {
        const { text, buttonText } = attributes;

        return (
            <div className="bg-white text-center p-14">
                <RichText.Content
                    tagName="h2"
                    value={text}
                    className="font-inter font-semibold text-xl text-[#1C3D5A] mb-4"
                />
                <div className="scroll-link">
                    <a
                        href="#what-we-do"
                        className="font-lato font-light text-base text-[#1C3D5A] border border-[#1C3D5A] rounded-lg py-2 px-6 inline-block transition-transform duration-300 ease-in-out transform hover:bg-[#1C3D5A] hover:text-white hover:scale-105"
                    >
                        {buttonText}
                    </a>
                </div>
            </div>
        );
    },
});
