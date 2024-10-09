import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, Button, RangeControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

registerBlockType('people-studio/image-text-block', {
    title: 'Image and Text Block',
    icon: 'format-image',
    category: 'layout',
    attributes: {
        sectionTitle: {
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: 'Section Title',
        },
        rows: {
            type: 'array',
            default: [],
        },
        imageSize: {
            type: 'number',
            default: 100, // Tamaño inicial de la imagen (100% del contenedor)
        },
        buttonText: {
            type: 'string',
            source: 'html',
            selector: 'a',
            default: 'View Services', // Texto del botón
        },
        buttonColor: {
            type: 'string',
            default: '#1C3D5A', // Color del botón
        },
    },
    edit({ attributes, setAttributes }) {
        const { sectionTitle, rows, imageSize, buttonText, buttonColor } = attributes;

        const addRow = () => {
            const newRows = [...rows, { image: null, text: '' }];
            setAttributes({ rows: newRows });
        };

        const updateRow = (index, field, value) => {
            const updatedRows = [...rows];
            updatedRows[index][field] = value;
            setAttributes({ rows: updatedRows });
        };

        const removeRow = (index) => {
            const updatedRows = [...rows];
            updatedRows.splice(index, 1);
            setAttributes({ rows: updatedRows });
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title="Section Settings" initialOpen={true}>
                        <RichText
                            tagName="h2"
                            value={sectionTitle}
                            onChange={(value) => setAttributes({ sectionTitle: value })}
                            placeholder="Enter section title"
                        />
                    </PanelBody>
                    <PanelBody title="Image Settings" initialOpen={false}>
                        <RangeControl
                            label="Image Size"
                            value={imageSize}
                            onChange={(value) => setAttributes({ imageSize: value })}
                            min={50}
                            max={100}
                            step={1}
                        />
                    </PanelBody>
                </InspectorControls>

                <div className="bg-[#F5F5F5] py-14" id="what-we-do">
                    {rows.map((row, index) => (
                        <div
                            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} mb-8 p-4 gap-4`}
                            key={index}
                        >
                            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
                                <MediaUpload
                                    onSelect={(media) => updateRow(index, 'image', media.url)}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <Button onClick={open} isPrimary>
                                            {row.image ? (
                                                <img
                                                    src={row.image}
                                                    alt={`Row image ${index + 1}`}
                                                    className="max-w-full h-auto"
                                                    style={{
                                                        maxWidth: `${imageSize}%`,
                                                        height: 'auto',
                                                    }} 
                                                />
                                            ) : (
                                                'Upload Image'
                                            )}
                                        </Button>
                                    )}
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
                                {index === 0 && sectionTitle && (
                                    <RichText.Content
                                        tagName="h2"
                                        value={sectionTitle}
                                        className="font-inter font-semibold text-4xl mb-4"
                                    />
                                )}
                                <RichText
                                    tagName="p"
                                    value={row.text}
                                    onChange={(value) => updateRow(index, 'text', value)}
                                    placeholder="Enter text here"
                                    className="text-lg leading-relaxed text-left"
                                    allowedFormats={['core/bold']}
                                />
                            </div>
                            <Button isDestructive onClick={() => removeRow(index)} className="mt-4">
                                Remove Row
                            </Button>
                        </div>
                    ))}

                    <Button isPrimary onClick={addRow}>
                        Add New Row
                    </Button>

                    {/* CTA Button */}
                    <div className="text-center mt-8">
                        <a
                            href="#"
                            className="font-lato font-light text-base text-[#1C3D5A] border border-[#1C3D5A] rounded-lg py-2 px-6 inline-block transition-transform duration-300 ease-in-out transform hover:bg-[#1C3D5A] hover:text-white hover:scale-105"
                        >
                            {buttonText}
                        </a>
                    </div>

                </div>
            </Fragment>
        );
    },
    save({ attributes }) {
        const { sectionTitle, rows, imageSize, buttonText, buttonColor } = attributes;

        return (
            <div className="bg-[#F5F5F5] py-14" id="what-we-do">
                {rows.map((row, index) => (
                    <div
                        className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} mb-8 gap-4`}
                        key={index}
                    >
                        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
                            {row.image && (
                                <img
                                    src={row.image}
                                    alt={`Row image ${index + 1}`}
                                    className="max-w-full h-auto"
                                    style={{
                                        maxWidth: `${imageSize}%`,
                                        height: 'auto',
                                    }}
                                />
                            )}
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
                            {index === 0 && sectionTitle && (
                                <RichText.Content
                                    tagName="h2"
                                    value={sectionTitle}
                                    className="font-inter font-semibold text-4xl mb-4"
                                />
                            )}
                            <RichText.Content
                                tagName="p"
                                value={row.text}
                                className="text-lg leading-relaxed text-left"
                            />
                        </div>
                    </div>
                ))}

                {/* CTA Button */}
                <div className="text-center mt-8 scroll-link">
                    <a
                        href="#our-services"
                        className="font-lato font-light text-base text-[#1C3D5A] border border-[#1C3D5A] rounded-lg py-2 px-6 inline-block transition-transform duration-300 ease-in-out transform hover:bg-[#1C3D5A] hover:text-white hover:scale-105"
                    >
                        {buttonText}
                    </a>
                </div>

            </div>
        );
    },
});
