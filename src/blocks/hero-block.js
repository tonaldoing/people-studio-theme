import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

registerBlockType('people-studio/hero', {
    title: 'Hero Block',
    icon: 'smiley',
    category: 'layout',
    attributes: {
        bgImageMobile: {
            type: 'string',
            default: null,
        },
        bgImageDesktop: {
            type: 'string',
            default: null,
        },
        contentImage: {
            type: 'string',
            default: null,
        },
        bgColor: {
            type: 'string',
            default: '#ffffff',  // Default color in hex
        },
    },
    edit({ attributes, setAttributes }) {
        const { bgImageMobile, bgImageDesktop, contentImage, bgColor } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title="Background Image (Mobile)" initialOpen={true}>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ bgImageMobile: media.url })}
                            allowedTypes={['image']}
                            value={bgImageMobile}
                            render={({ open }) => (
                                <Button onClick={open} isDefault isPrimary>
                                    {!bgImageMobile ? 'Select Mobile Background Image' : 'Change Mobile Background Image'}
                                </Button>
                            )}
                        />
                        {bgImageMobile && (
                            <img src={bgImageMobile} alt="Mobile Background" className="w-full mt-2" />
                        )}
                    </PanelBody>

                    <PanelBody title="Background Image (Desktop)" initialOpen={false}>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ bgImageDesktop: media.url })}
                            allowedTypes={['image']}
                            value={bgImageDesktop}
                            render={({ open }) => (
                                <Button onClick={open} isDefault isPrimary>
                                    {!bgImageDesktop ? 'Select Desktop Background Image' : 'Change Desktop Background Image'}
                                </Button>
                            )}
                        />
                        {bgImageDesktop && (
                            <img src={bgImageDesktop} alt="Desktop Background" className="w-full mt-2" />
                        )}
                    </PanelBody>

                    <PanelBody title="Content Image" initialOpen={false}>
                        <p><strong>Content Image</strong></p>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ contentImage: media.url })}
                            allowedTypes={['image']}
                            value={contentImage}
                            render={({ open }) => (
                                <Button onClick={open} isDefault isPrimary>
                                    {!contentImage ? 'Select Content Image' : 'Change Content Image'}
                                </Button>
                            )}
                        />
                        {contentImage && (
                            <img src={contentImage} alt="Content" className="w-full mt-2" />
                        )}
                    </PanelBody>

                    <PanelBody title="Background Color for Middle Section" initialOpen={false}>
                        <p><strong>Background Color</strong></p>
                        <ColorPalette
                            value={bgColor}
                            onChange={(color) => setAttributes({ bgColor: color })}
                        />
                    </PanelBody>
                </InspectorControls>

                <div className="relative hero-block w-full h-[70vh]">
                    {/* Bloque de fondo usando picture */}
                    <picture className="md:absolute inset-0 w-full h-full object-cover">
                        <source media="(min-width: 768px)" srcSet={bgImageDesktop} />
                        <img src={bgImageMobile} alt="Background" className="w-full h-full object-cover" />
                    </picture>

                    {/* Bloque de contenido */}
                    <div className="absolute bottom-0 md:inset-0 flex justify-center items-center w-full">
                        <div
                            className={`hero-content w-full md:max-w-[430px] md:max-h-[120px] px-4`}
                            style={{
                                backgroundColor: bgColor,
                            }}
                        >
                            {contentImage && (
                                <img
                                    src={contentImage}
                                    alt="Hero Content"
                                    className="md:max-w-[60%] h-auto mx-auto"
                                />
                            )}
                        </div>
                    </div>

                    {/* Aplicar opacidad en desktop */}
                    <style jsx>{`
                        @media (min-width: 768px) {
                            .hero-content {
                                background-color: ${bgColor} !important;
                                opacity: 0.8;  // Color con opacidad solo en desktop
                            }
                        }
                    `}</style>
                </div>
            </Fragment>
        );
    },
    save({ attributes }) {
        const { bgImageMobile, bgImageDesktop, contentImage, bgColor } = attributes;

        return (
            <div className="relative hero-block w-full h-[70vh]">
                {/* Bloque de fondo usando picture */}
                <picture className="md:absolute inset-0 w-full h-full object-cover">
                    <source media="(min-width: 768px)" srcSet={bgImageDesktop} />
                    <img src={bgImageMobile} alt="Background" className="w-full h-full object-cover" />
                </picture>

                {/* Bloque de contenido */}
                <div className="absolute bottom-0 md:inset-0 flex justify-center items-center w-full">
                    <div
                        className={`hero-content w-full md:max-w-[430px] md:max-h-[120px] px-4`}
                        style={{
                            backgroundColor: bgColor,
                        }}
                    >
                        {contentImage && (
                            <img
                                src={contentImage}
                                alt="Hero Content"
                                className="md:max-w-[60%] h-auto mx-auto"
                            />
                        )}
                    </div>
                </div>

                {/* Aplicar opacidad en desktop */}
                <style jsx>{`
                    @media (min-width: 768px) {
                        .hero-content {
                            background-color: ${bgColor} !important;
                            opacity: 0.8;  // Color con opacidad solo en desktop
                        }
                    }
                `}</style>
            </div>
        );
    },
});
